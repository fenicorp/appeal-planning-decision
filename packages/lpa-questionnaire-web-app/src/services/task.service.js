const { VIEW } = require('../lib/views');
const TASK_STATUS = require('./task-status/task-statuses');

function statusTemp() {
  // TODO: these will be replaces when we have checks for status of each step
  return TASK_STATUS.NOT_STARTED;
}

function statusCheckYourAnswer() {
  // TODO: needs to check questionnaire status to allow check
  return TASK_STATUS.CANNOT_START_YET;
}

const SECTIONS = [
  {
    sectionId: 'aboutAppealSection',
    tasks: [
      {
        taskId: 'submissionAccuracy',
        href: '#',
        rule: statusTemp,
      },
      {
        taskId: 'extraConditions',
        href: '#',
        rule: statusTemp,
      },
      {
        taskId: 'areaAppeals',
        href: '#',
        rule: statusTemp,
      },
    ],
  },
  {
    sectionId: 'aboutAppealSiteSection',
    tasks: [
      {
        taskId: 'aboutSite',
        href: '#',
        rule: statusTemp,
      },
    ],
  },
  {
    sectionId: 'requiredDocumentsSection',
    tasks: [
      {
        taskId: 'plansDecision',
        href: '#',
        rule: statusTemp,
      },
      {
        taskId: 'officersReport',
        href: '#',
        rule: statusTemp,
      },
    ],
  },
  {
    sectionId: 'optionalDocumentsSection',
    tasks: [
      {
        taskId: 'interestedPartiesApplication',
        href: '#',
        rule: statusTemp,
      },
      {
        taskId: 'representationsInterestedParties',
        href: '#',
        rule: statusTemp,
      },
      {
        taskId: 'interestedPartiesAppeal',
        href: '#',
        rule: statusTemp,
      },
      {
        taskId: 'siteNotices',
        href: '#',
        rule: statusTemp,
      },
      {
        taskId: 'planningHistory',
        href: '#',
        rule: statusTemp,
      },
      {
        taskId: 'statutoryDevelopment',
        href: '#',
        rule: statusTemp,
      },
      {
        taskId: 'otherPolicies',
        href: '#',
        rule: statusTemp,
      },
      {
        taskId: 'supplementaryPlanningDocuments',
        href: '#',
        rule: statusTemp,
      },
      {
        taskId: 'developmentOrNeighbourhood',
        href: '#',
        rule: statusTemp,
      },
    ],
  },
  {
    sectionId: 'submitQuestionnaireSection',
    tasks: [
      {
        taskId: 'checkYourAnswers',
        href: '#',
        rule: statusCheckYourAnswer,
      },
    ],
  },
];

// Get next section task
const getNextTask = () => {
  return { href: `/${VIEW.TASK_LIST}` };
};

module.exports = {
  SECTIONS,
  getNextTask,
};
