const { getTaskStatus, SECTIONS } = require('../services/task.service');
const { VIEW } = require('../lib/views');
const countTasks = require('../lib/count-task');

const HEADERS = {
  aboutAppealSection: 'About the appeal',
  submissionAccuracy: "Review accuracy of the appellant's submission",
  extraConditions: '',
  areaAppeals: '',
  aboutAppealSiteSection: '',
  aboutSite: '',
  requiredDocumentsSection: '',
  plansDecision: '',
  officersReport: '',
  optionalDocumentsSection: '',
  interestedPartiesApplication: '',
  representationsInterestedParties: '',
  interestedPartiesAppeal: '',
  siteNotices: '',
  planningHistory: '',
  statutoryDevelopment: '',
  otherPolicies: '',
  supplementaryPlanningDocuments: '',
  developmentOrNeighbourhood: '',
};

function buildTaskLists(questionnaire) {
  return Object.keys(SECTIONS).map((sectionId) => {
    const section = SECTIONS[sectionId];
    return {
      heading: {
        text: HEADERS[sectionId],
      },
      items: Object.keys(section).map((subSectionId) => {
        const subSection = section[subSectionId];
        const status = getTaskStatus(questionnaire, sectionId, subSectionId);

        return {
          text: HEADERS[subSectionId],
          href: subSection.href,
          attributes: {
            name: subSectionId,
            [`${subSectionId}-status`]: status,
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
