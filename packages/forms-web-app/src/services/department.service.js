const { getLPAList } = require('../lib/appeals-api-wrapper');

let departmentsById = {};
let departmentsByName = {};
let departments = [];
let eligibleDepartments = [];

async function initLPALists() {
  const lpaList = await getLPAList();
  const { data } = lpaList;

  eligibleDepartments = [];
  departments = data.map((department) => {
    departmentsById[department.id] = department;
    departmentsByName[department.name] = department;
    if (department.inTrial) {
      eligibleDepartments.push(department.name);
    }
    return department.name;
  });
}

const getDepartmentData = async () => {
  if (!departments.length) {
    await initLPALists();
  }
  return { departments, eligibleDepartments };
};

const getDepartmentFromId = async (id) => {
  if (!departments.length) {
    await initLPALists();
  }
  return departmentsById[id];
};

const getDepartmentFromName = async (name) => {
  if (!departments.length) {
    await initLPALists();
  }
  return departmentsByName[name];
};

const resetDepartments = () => {
  departments = [];
  eligibleDepartments = [];
  departmentsById = {};
  departmentsByName = {};
};

module.exports = {
  getDepartmentData,
  getDepartmentFromId,
  getDepartmentFromName,
  resetDepartments,
};