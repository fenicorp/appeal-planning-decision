const { getDepartmentFromId } = require('../../services/department.service');
const { VIEW } = require('../../lib/views');

const isOriginalApplicantFn = (appeal) => {
  if (
    !appeal ||
    !appeal.aboutYouSection ||
    !appeal.aboutYouSection.yourDetails ||
    !appeal.aboutYouSection.yourDetails.isOriginalApplicant
  ) {
    return null;
  }

  if (typeof appeal.aboutYouSection.yourDetails.isOriginalApplicant !== 'boolean') {
    return null;
  }

  return appeal.aboutYouSection.yourDetails.isOriginalApplicant ? 'Yes' : 'No';
};

const multifileUploadFileNamesOnly = (multifileUploadsArray) =>
  multifileUploadsArray.reduce((acc, file) => {
    if (!file.originalFileName) {
      return acc;
    }

    return [...acc, file.originalFileName];
  }, []);

exports.getCheckAnswers = async (req, res) => {
  const { appeal } = req.session;
  let appealLPD = '';

  if (appeal.lpaCode) {
    const lpd = await getDepartmentFromId(appeal.lpaCode);
    if (lpd) {
      appealLPD = lpd.name;
    }
  }

  res.render(VIEW.APPELLANT_SUBMISSION.CHECK_ANSWERS, {
    appealLPD,
    appeal,
    isOriginalApplicant: isOriginalApplicantFn(appeal),
    otherDocuments: multifileUploadFileNamesOnly(
      appeal.yourAppealSection.otherDocuments.uploadedFiles
    ),
  });
};
