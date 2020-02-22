module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
  	return false;
  }

  return members.filter((it) => typeof it == 'string')
                .map((it) => it.trim().toUpperCase())
                .sort()
                .reduce((acc, val) => acc+= val[0],'');
};