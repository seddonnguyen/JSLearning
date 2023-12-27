// https://leetcode.com/problems/course-schedule/
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const canFinish = (numCourses, prerequisites) => {
    let preMap = new Map();
    let visitSet = new Set();

    for(let i = 0; i < numCourses; i++) {
        preMap.set(i, []);
    }

    for(let c of prerequisites) {
        let course = c[0];
        preMap.set(course, [...preMap.get(course), c[1]]);
    }

    const dfs = course => {
        if(visitSet.has(course)) {
            return false;
        }

        let preReq = preMap.get(course);

        if(preReq.length === 0) {
            return true;
        }

        visitSet.add(course);

        for(let c of preReq) {
            if(!dfs(c)) {
                return false;
            }
        }

        visitSet.delete(course);
        preMap.set(course, []);
        return true;
    };

    for(let i = 0; i < numCourses; i++) {
        if(!dfs(i)) {
            return false;
        }
    }
    return true;
};

const numCourses = 2;
const prerequisites = [[1, 0], [0, 1]];

console.log(canFinish(numCourses, prerequisites));