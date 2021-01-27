const { SECTIONS } = require('../services/task.service');
const { VIEW } = require('../lib/views');
const countTasks = require('../lib/count-task');

const HEADERS = {
  aboutAppealSection: 'About the appeal',
  submissionAccuracy: "Review accuracy of the appellant's submission",
  extraConditions: 'Do you have any extra conditions?',
  areaAppeals: 'Tell us about any appeals in the immediate area',
  aboutAppealSiteSection: 'About the appeal site',
  aboutSite: 'Tell us about the appeal site',
  requiredDocumentsSection: 'Required documents',
  plansDecision: 'Upload the plans used to reach the decision',
  officersReport: "Upload the Planning Officer's report",
  optionalDocumentsSection: 'Optional supporting documents',
  interestedPartiesApplication: 'Telling interested parties about the application',
  representationsInterestedParties: 'Representations from interested parties',
  interestedPartiesAppeal: 'Notifying interested parties of the appeal',
  siteNotices: 'Site notices',
  planningHistory: 'Planning history',
  statutoryDevelopment: 'Statutory development plan policy',
  otherPolicies: 'Other relevant policies',
  supplementaryPlanningDocuments: 'Supplementary planning document extracts',
  developmentOrNeighbourhood: 'Development Plan Document or Neighbourhood Plan',
  submitQuestionnaireSection: 'Before you submit',
  checkYourAnswers: 'Check your answers',
};

/**
 * @name buildTaskLists
 * @description Builds array of section objects, each has an array of tasks
 * @param questionnaire Questionnaire details from request
 * @return {array} Array of section objects
 */
function buildTaskLists(questionnaire) {
  return SECTIONS.map(({ sectionId, tasks }) => {
    return {
      heading: {
        text: HEADERS[sectionId],
      },
      tasks: tasks.map(({ taskId, href, rule }) => {
        const status = rule(questionnaire);

        return {
          text: HEADERS[taskId],
          href,
          attributes: {
            name: taskId,
            [`${taskId}-status`]: status,
          },
          status,
        };
      }),
    };
  });
}

exports.getTaskList = (req, res) => {
  const { questionnaire } = req.session;
  const sections = buildTaskLists(questionnaire);
  const applicationStatus = 'Application incomplete';
  const sectionInfo = countTasks(sections);

  res.render(VIEW.TASK_LIST, {
    applicationStatus,
    sectionInfo,
    sections,
  });
};
