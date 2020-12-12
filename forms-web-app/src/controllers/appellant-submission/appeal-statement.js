const { VIEW } = require('../../lib/views');
const { createOrUpdateAppeal } = require('../../lib/appeals-api-wrapper');
const logger = require('../../lib/logger');
const { getNextUncompletedTask } = require('../../services/task.service');
const { getTaskStatus } = require('../../services/task.service');

const sectionName = 'yourAppealSection';
const taskName = 'appealStatement';

exports.getAppealStatement = async (req, res) => {
  const { appeal } = req.session;
  req.session.appeal = await createOrUpdateAppeal(appeal);
  res.render(VIEW.APPELLANT_SUBMISSION.APPEAL_STATEMENT, {
    appeal: req.session.appeal,
  });
};

exports.postAppealStatement = async (req, res) => {
  const { body } = req;
  const { errors = {}, errorSummary = [] } = body;

  if (Object.keys(errors).length > 0) {
    res.render(VIEW.APPELLANT_SUBMISSION.APPEAL_STATEMENT, {
      appeal: req.session.appeal,
      errors,
      errorSummary,
    });
    return;
  }

  const { appeal } = req.session;
  const task = appeal[sectionName][taskName];

  if ('files' in req && req.files !== null) {
    if ('appeal-upload' in req.files) {
      task.uploadedFile = req.files &&
        req.files['appeal-upload'] && {
          name: req.files['appeal-upload'].name,
        };
    }
  }

  if (body['does-not-include-sensitive-information'] === 'i-confirm') {
    try {
      task.hasSensitiveInformation = false;
      appeal.sectionStates[sectionName][taskName] = getTaskStatus(appeal, sectionName, taskName);
      appeal.yourAppealSection.appealStatement.hasSensitiveInformation = false;
      if ('files' in req && req.files !== null) {
        if ('appeal-upload' in req.files) {
          // Placeholder code pending availability of documents service api ---------------
          appeal.yourAppealSection.appealStatement.uploadedFile.name =
            req.files['appeal-upload'].name;
          appeal.yourAppealSection.appealStatement.uploadedFile.id =
            'f3e14d7c-f7c0-4e1f-ae5a-23c94542032f';
          // ------------------------------------------------------------------------------
        }
      }

      req.session.appeal = await createOrUpdateAppeal(appeal);
    } catch (e) {
      logger.error(e);
      res.render(VIEW.APPELLANT_SUBMISSION.APPEAL_STATEMENT, {
        appeal,
        errors,
        errorSummary: [{ text: e.toString(), href: '#' }],
      });
      return;
    }

    res.redirect(getNextUncompletedTask(appeal, { sectionName, taskName }).href);
    return;
  }

  res.redirect(`/${VIEW.APPELLANT_SUBMISSION.APPEAL_STATEMENT}`);
};
