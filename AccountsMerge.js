// https://leetcode.com/problems/accounts-merge/
// leetcode 721. Accounts Merge
// Given a list of accounts where each element accounts[i] is a list of strings,
// where the first element accounts[i][0] is a name, and the rest of the elements are emails representing emails of the account.
// Now, we would like to merge these accounts. Two accounts definitely belong to the same person if there is some common email to both accounts.
// Note that even if two accounts have the same name, they may belong to different people as people could have the same name.
// A person can have any number of accounts initially, but all of their accounts definitely have the same name.
// After merging the accounts, return the accounts in the following format:
// the first element of each account is the name, and the rest of the elements are emails in sorted order.
// The accounts themselves can be returned in any order.
//
// Example 1:
// Input: accounts = [["John","johnsmith@mail.com","john_newyork@mail.com"],["John","johnsmith@mail.com","john00@mail.com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]
// Output: [["John","john00@mail.com","john_newyork@mail.com","johnsmith@mail.com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]
// Explanation:
//     The first and second John's are the same person as they have the common email "johnsmith@mail.com".
//     The third John and Mary are different people as none of their email addresses are used by other accounts.
//     We could return these lists in any order, for example the answer [['Mary', 'mary@mail.com'], ['John', 'johnnybravo@mail.com'],
//     ['John', 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com']] would still be accepted.
//
// Example 2:
// Input: accounts = [["Gabe","Gabe0@m.co","Gabe3@m.co","Gabe1@m.co"],["Kevin","Kevin3@m.co","Kevin5@m.co","Kevin0@m.co"],["Ethan","Ethan5@m.co","Ethan4@m.co","Ethan0@m.co"],["Hanzo","Hanzo3@m.co","Hanzo1@m.co","Hanzo0@m.co"],["Fern","Fern5@m.co","Fern1@m.co","Fern0@m.co"]]
// Output: [["Ethan","Ethan0@m.co","Ethan4@m.co","Ethan5@m.co"],["Gabe","Gabe0@m.co","Gabe1@m.co","Gabe3@m.co"],["Hanzo","Hanzo0@m.co","Hanzo1@m.co","Hanzo3@m.co"],["Kevin","Kevin0@m.co","Kevin3@m.co","Kevin5@m.co"],["Fern","Fern0@m.co","Fern1@m.co","Fern5@m.co"]]
//
// Constraints:
// 1 <= accounts.length <= 1000
// 2 <= accounts[i].length <= 10
// 1 <= accounts[i][j].length <= 30
// accounts[i][0] consists of English letters.
// accounts[i][j] (for j > 0) is a valid email.

/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
const accountsMerge = function(accounts) {
    const parent = [0];
    const rank = [1];
    const names = [""];
    const emailToAccount = new Map();
    const accountToEmails = new Map();
    const emails = new Set();

    for(let i = 1; i <= accounts.length; i++) {
        parent[i] = i;
        rank[i] = 1;
    }

    /**
     * @param {number} n
     * @return {number}
     */
    const find = n => {
        let p = parent[n];
        while(p !== parent[p]) {
            parent[p] = parent[parent[p]];
            p = parent[p];
        }
        return p;
    };

    /**
     * @param {number} n1
     * @param {number} n2
     */
    const union = (n1, n2) => {
        let p1 = find(n1);
        let p2 = find(n2);

        if(p1 === p2) {
            return;
        }

        if(rank[p1] <= rank[p2]) {
            parent[p1] = p2;
            rank[p2] += rank[p1];
        } else {
            parent[p2] = p1;
            rank[p1] += rank[p2];
        }
    };

    let idx = 1;
    for(let account of accounts) {
        names[idx] = account[0];
        for(let i = 1; i < account.length; i++) {
            const email = account[i];
            if(!emailToAccount.has(email)) {
                emails.add(email);
                emailToAccount.set(email, idx);
            } else {
                union(idx, emailToAccount.get(email));
            }
        }
        idx++;
    }

    emails.forEach(email => {
        const a = find(emailToAccount.get(email));
        if(!accountToEmails.has(a)) {
            accountToEmails.set(a, [email]);
        } else {
            accountToEmails.get(a).push(email);
        }
    });

    let results = [];
    for(let [account, emails] of accountToEmails) {
        results.push([names[account], ...emails.sort()])
    }
    return results;
};

const accounts =
    [
        ["John", "johnsmith@mail.com", "john_newyork@mail.com"],
        ["John", "johnsmith@mail.com", "john00@mail.com"],
        ["Mary", "mary@mail.com"],
        ["John", "johnnybravo@mail.com"]
    ];
console.log(accountsMerge(accounts));