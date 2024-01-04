// https://leetcode.com/problems/word-search-ii/
// leetcode 212. Word Search II
// Given an m x n board of characters and a list of strings words, return all words on the board.
// Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring.
// The same letter cell may not be used more than once in a word.
//
// Example 1:
// Input: board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
// Output: ["eat","oath"]
//
// Example 2:
// Input: board = [["a","b"],["c","d"]], words = ["abcb"]
// Output: []
//
// Constraints:
// m == board.length
// n == board[i].length
// 1 <= m, n <= 12
// board[i][j] is a lowercase English letter.
// 1 <= words.length <= 3 * 104
// 1 <= words[i].length <= 10
// words[i] consists of lowercase English letters.
// All the strings of words are unique.

const {TrieNode} = require("./Trie.js");

/**
 * @param {string[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = function(board, words) {
    const root = new TrieNode();
    const visit = new Set();
    const result = new Set();
    const [ROW, COL] = [board.length, board[0].length];

    for(let word of words) {
        let currentNode = root;
        for(let c of word) {
            if(!currentNode.children.has(c)) {
                currentNode.children.set(c, new TrieNode());
            }
            currentNode = currentNode.children.get(c);
        }
        currentNode.endOfWord = true;
    }

    /**
     * @param {number} row
     * @param {number} col
     * @param {TrieNode} node
     * @param {string} word
     */
    const dfs = (row, col, node, word) => {
        const coordinate = `${row},${col}`;

        if(row < 0 || col < 0 || row >= ROW || col >= COL || visit.has(coordinate) || !node.children.get(board[row][col])) {
            return;
        }

        word += board[row][col];
        node = node.children.get(board[row][col]);
        if(node.endOfWord && !result.has(word)) {
            result.add(word);
        }

        visit.add(coordinate);
        dfs(row, col + 1, node, word);
        dfs(row, col - 1, node, word);
        dfs(row + 1, col, node, word);
        dfs(row - 1, col, node, word);
        visit.delete(coordinate);
    };

    for(let row = 0; row < ROW; row++) {
        for(let col = 0; col < COL; col++) {
            dfs(row, col, root, "");
        }
    }
    return [...result];
};

const board =
    [
        ["m", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"],
        ["n", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
        ["o", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
        ["p", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
        ["q", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
        ["r", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
        ["s", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
        ["t", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
        ["u", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
        ["v", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
        ["w", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
        ["x", "y", "z", "a", "a", "a", "a", "a", "a", "a", "a", "a"]
    ];
const words = ["aaaaaaaaaa", "baaaaaaaaa", "caaaaaaaaa", "daaaaaaaaa", "eaaaaaaaaa", "faaaaaaaaa", "gaaaaaaaaa", "haaaaaaaaa", "iaaaaaaaaa", "jaaaaaaaaa", "kaaaaaaaaa", "laaaaaaaaa", "maaaaaaaaa", "naaaaaaaaa", "oaaaaaaaaa", "paaaaaaaaa", "qaaaaaaaaa", "raaaaaaaaa", "saaaaaaaaa", "taaaaaaaaa", "uaaaaaaaaa", "vaaaaaaaaa", "waaaaaaaaa", "xaaaaaaaaa", "yaaaaaaaaa", "zaaaaaaaaa", "abaaaaaaaa", "bbaaaaaaaa", "cbaaaaaaaa", "dbaaaaaaaa", "ebaaaaaaaa", "fbaaaaaaaa", "gbaaaaaaaa", "hbaaaaaaaa", "ibaaaaaaaa", "jbaaaaaaaa", "kbaaaaaaaa", "lbaaaaaaaa", "mbaaaaaaaa", "nbaaaaaaaa", "obaaaaaaaa", "pbaaaaaaaa", "qbaaaaaaaa", "rbaaaaaaaa", "sbaaaaaaaa", "tbaaaaaaaa", "ubaaaaaaaa", "vbaaaaaaaa", "wbaaaaaaaa", "xbaaaaaaaa", "ybaaaaaaaa", "zbaaaaaaaa", "acaaaaaaaa", "bcaaaaaaaa", "ccaaaaaaaa", "dcaaaaaaaa", "ecaaaaaaaa", "fcaaaaaaaa", "gcaaaaaaaa", "hcaaaaaaaa", "icaaaaaaaa", "jcaaaaaaaa", "kcaaaaaaaa", "lcaaaaaaaa", "mcaaaaaaaa", "ncaaaaaaaa", "ocaaaaaaaa", "pcaaaaaaaa", "qcaaaaaaaa", "rcaaaaaaaa", "scaaaaaaaa", "tcaaaaaaaa", "ucaaaaaaaa", "vcaaaaaaaa", "wcaaaaaaaa", "xcaaaaaaaa", "ycaaaaaaaa", "zcaaaaaaaa", "adaaaaaaaa", "bdaaaaaaaa", "cdaaaaaaaa", "ddaaaaaaaa", "edaaaaaaaa", "fdaaaaaaaa", "gdaaaaaaaa", "hdaaaaaaaa", "idaaaaaaaa", "jdaaaaaaaa", "kdaaaaaaaa", "ldaaaaaaaa", "mdaaaaaaaa", "ndaaaaaaaa", "odaaaaaaaa", "pdaaaaaaaa", "qdaaaaaaaa", "rdaaaaaaaa", "sdaaaaaaaa", "tdaaaaaaaa", "udaaaaaaaa", "vdaaaaaaaa", "wdaaaaaaaa", "xdaaaaaaaa", "ydaaaaaaaa", "zdaaaaaaaa", "aeaaaaaaaa", "beaaaaaaaa", "ceaaaaaaaa", "deaaaaaaaa", "eeaaaaaaaa", "feaaaaaaaa", "geaaaaaaaa", "heaaaaaaaa", "ieaaaaaaaa", "jeaaaaaaaa", "keaaaaaaaa", "leaaaaaaaa", "meaaaaaaaa", "neaaaaaaaa", "oeaaaaaaaa", "peaaaaaaaa", "qeaaaaaaaa", "reaaaaaaaa", "seaaaaaaaa", "teaaaaaaaa", "ueaaaaaaaa", "veaaaaaaaa", "weaaaaaaaa", "xeaaaaaaaa", "yeaaaaaaaa", "zeaaaaaaaa", "afaaaaaaaa", "bfaaaaaaaa", "cfaaaaaaaa", "dfaaaaaaaa", "efaaaaaaaa", "ffaaaaaaaa", "gfaaaaaaaa", "hfaaaaaaaa", "ifaaaaaaaa", "jfaaaaaaaa", "kfaaaaaaaa", "lfaaaaaaaa", "mfaaaaaaaa", "nfaaaaaaaa", "ofaaaaaaaa", "pfaaaaaaaa", "qfaaaaaaaa", "rfaaaaaaaa", "sfaaaaaaaa", "tfaaaaaaaa", "ufaaaaaaaa", "vfaaaaaaaa", "wfaaaaaaaa", "xfaaaaaaaa", "yfaaaaaaaa", "zfaaaaaaaa", "agaaaaaaaa", "bgaaaaaaaa", "cgaaaaaaaa", "dgaaaaaaaa", "egaaaaaaaa", "fgaaaaaaaa", "ggaaaaaaaa", "hgaaaaaaaa", "igaaaaaaaa", "jgaaaaaaaa", "kgaaaaaaaa", "lgaaaaaaaa", "mgaaaaaaaa", "ngaaaaaaaa", "ogaaaaaaaa", "pgaaaaaaaa", "qgaaaaaaaa", "rgaaaaaaaa", "sgaaaaaaaa", "tgaaaaaaaa", "ugaaaaaaaa", "vgaaaaaaaa", "wgaaaaaaaa", "xgaaaaaaaa", "ygaaaaaaaa", "zgaaaaaaaa", "ahaaaaaaaa", "bhaaaaaaaa", "chaaaaaaaa", "dhaaaaaaaa", "ehaaaaaaaa", "fhaaaaaaaa", "ghaaaaaaaa", "hhaaaaaaaa", "ihaaaaaaaa", "jhaaaaaaaa", "khaaaaaaaa", "lhaaaaaaaa", "mhaaaaaaaa", "nhaaaaaaaa", "ohaaaaaaaa", "phaaaaaaaa", "qhaaaaaaaa", "rhaaaaaaaa", "shaaaaaaaa", "thaaaaaaaa", "uhaaaaaaaa", "vhaaaaaaaa", "whaaaaaaaa", "xhaaaaaaaa", "yhaaaaaaaa", "zhaaaaaaaa", "aiaaaaaaaa", "biaaaaaaaa", "ciaaaaaaaa", "diaaaaaaaa", "eiaaaaaaaa", "fiaaaaaaaa", "giaaaaaaaa", "hiaaaaaaaa", "iiaaaaaaaa", "jiaaaaaaaa", "kiaaaaaaaa", "liaaaaaaaa", "miaaaaaaaa", "niaaaaaaaa", "oiaaaaaaaa", "piaaaaaaaa", "qiaaaaaaaa", "riaaaaaaaa", "siaaaaaaaa", "tiaaaaaaaa", "uiaaaaaaaa", "viaaaaaaaa", "wiaaaaaaaa", "xiaaaaaaaa", "yiaaaaaaaa", "ziaaaaaaaa", "ajaaaaaaaa", "bjaaaaaaaa", "cjaaaaaaaa", "djaaaaaaaa", "ejaaaaaaaa", "fjaaaaaaaa", "gjaaaaaaaa", "hjaaaaaaaa", "ijaaaaaaaa", "jjaaaaaaaa", "kjaaaaaaaa", "ljaaaaaaaa", "mjaaaaaaaa", "njaaaaaaaa", "ojaaaaaaaa", "pjaaaaaaaa", "qjaaaaaaaa", "rjaaaaaaaa", "sjaaaaaaaa", "tjaaaaaaaa", "ujaaaaaaaa", "vjaaaaaaaa", "wjaaaaaaaa", "xjaaaaaaaa", "yjaaaaaaaa", "zjaaaaaaaa", "akaaaaaaaa", "bkaaaaaaaa", "ckaaaaaaaa", "dkaaaaaaaa", "ekaaaaaaaa", "fkaaaaaaaa", "gkaaaaaaaa", "hkaaaaaaaa", "ikaaaaaaaa", "jkaaaaaaaa", "kkaaaaaaaa", "lkaaaaaaaa", "mkaaaaaaaa", "nkaaaaaaaa", "okaaaaaaaa", "pkaaaaaaaa", "qkaaaaaaaa", "rkaaaaaaaa", "skaaaaaaaa", "tkaaaaaaaa", "ukaaaaaaaa", "vkaaaaaaaa", "wkaaaaaaaa", "xkaaaaaaaa", "ykaaaaaaaa", "zkaaaaaaaa", "alaaaaaaaa", "blaaaaaaaa", "claaaaaaaa", "dlaaaaaaaa", "elaaaaaaaa", "flaaaaaaaa", "glaaaaaaaa", "hlaaaaaaaa", "ilaaaaaaaa", "jlaaaaaaaa", "klaaaaaaaa", "llaaaaaaaa", "mlaaaaaaaa", "nlaaaaaaaa", "olaaaaaaaa", "plaaaaaaaa", "qlaaaaaaaa", "rlaaaaaaaa", "slaaaaaaaa", "tlaaaaaaaa", "ulaaaaaaaa", "vlaaaaaaaa", "wlaaaaaaaa", "xlaaaaaaaa", "ylaaaaaaaa", "zlaaaaaaaa", "amaaaaaaaa", "bmaaaaaaaa", "cmaaaaaaaa", "dmaaaaaaaa", "emaaaaaaaa", "fmaaaaaaaa", "gmaaaaaaaa", "hmaaaaaaaa", "imaaaaaaaa", "jmaaaaaaaa", "kmaaaaaaaa", "lmaaaaaaaa", "mmaaaaaaaa", "nmaaaaaaaa", "omaaaaaaaa", "pmaaaaaaaa", "qmaaaaaaaa", "rmaaaaaaaa", "smaaaaaaaa", "tmaaaaaaaa", "umaaaaaaaa", "vmaaaaaaaa", "wmaaaaaaaa", "xmaaaaaaaa", "ymaaaaaaaa", "zmaaaaaaaa", "anaaaaaaaa", "bnaaaaaaaa", "cnaaaaaaaa", "dnaaaaaaaa", "enaaaaaaaa", "fnaaaaaaaa", "gnaaaaaaaa", "hnaaaaaaaa", "inaaaaaaaa", "jnaaaaaaaa", "knaaaaaaaa", "lnaaaaaaaa", "mnaaaaaaaa", "nnaaaaaaaa", "onaaaaaaaa", "pnaaaaaaaa", "qnaaaaaaaa", "rnaaaaaaaa", "snaaaaaaaa", "tnaaaaaaaa", "unaaaaaaaa", "vnaaaaaaaa", "wnaaaaaaaa", "xnaaaaaaaa", "ynaaaaaaaa", "znaaaaaaaa", "aoaaaaaaaa", "boaaaaaaaa", "coaaaaaaaa", "doaaaaaaaa", "eoaaaaaaaa", "foaaaaaaaa", "goaaaaaaaa", "hoaaaaaaaa", "ioaaaaaaaa", "joaaaaaaaa", "koaaaaaaaa", "loaaaaaaaa", "moaaaaaaaa", "noaaaaaaaa", "ooaaaaaaaa", "poaaaaaaaa", "qoaaaaaaaa", "roaaaaaaaa", "soaaaaaaaa", "toaaaaaaaa", "uoaaaaaaaa", "voaaaaaaaa", "woaaaaaaaa", "xoaaaaaaaa", "yoaaaaaaaa", "zoaaaaaaaa", "apaaaaaaaa", "bpaaaaaaaa", "cpaaaaaaaa", "dpaaaaaaaa", "epaaaaaaaa", "fpaaaaaaaa", "gpaaaaaaaa", "hpaaaaaaaa", "ipaaaaaaaa", "jpaaaaaaaa", "kpaaaaaaaa", "lpaaaaaaaa", "mpaaaaaaaa", "npaaaaaaaa", "opaaaaaaaa", "ppaaaaaaaa", "qpaaaaaaaa", "rpaaaaaaaa", "spaaaaaaaa", "tpaaaaaaaa", "upaaaaaaaa", "vpaaaaaaaa", "wpaaaaaaaa", "xpaaaaaaaa", "ypaaaaaaaa", "zpaaaaaaaa", "aqaaaaaaaa", "bqaaaaaaaa", "cqaaaaaaaa", "dqaaaaaaaa", "eqaaaaaaaa", "fqaaaaaaaa", "gqaaaaaaaa", "hqaaaaaaaa", "iqaaaaaaaa", "jqaaaaaaaa", "kqaaaaaaaa", "lqaaaaaaaa", "mqaaaaaaaa", "nqaaaaaaaa", "oqaaaaaaaa", "pqaaaaaaaa", "qqaaaaaaaa", "rqaaaaaaaa", "sqaaaaaaaa", "tqaaaaaaaa", "uqaaaaaaaa", "vqaaaaaaaa", "wqaaaaaaaa", "xqaaaaaaaa", "yqaaaaaaaa", "zqaaaaaaaa", "araaaaaaaa", "braaaaaaaa", "craaaaaaaa", "draaaaaaaa", "eraaaaaaaa", "fraaaaaaaa", "graaaaaaaa", "hraaaaaaaa", "iraaaaaaaa", "jraaaaaaaa", "kraaaaaaaa", "lraaaaaaaa", "mraaaaaaaa", "nraaaaaaaa", "oraaaaaaaa", "praaaaaaaa", "qraaaaaaaa", "rraaaaaaaa", "sraaaaaaaa", "traaaaaaaa", "uraaaaaaaa", "vraaaaaaaa", "wraaaaaaaa", "xraaaaaaaa", "yraaaaaaaa", "zraaaaaaaa", "asaaaaaaaa", "bsaaaaaaaa", "csaaaaaaaa", "dsaaaaaaaa", "esaaaaaaaa", "fsaaaaaaaa", "gsaaaaaaaa", "hsaaaaaaaa", "isaaaaaaaa", "jsaaaaaaaa", "ksaaaaaaaa", "lsaaaaaaaa", "msaaaaaaaa", "nsaaaaaaaa", "osaaaaaaaa", "psaaaaaaaa", "qsaaaaaaaa", "rsaaaaaaaa", "ssaaaaaaaa", "tsaaaaaaaa", "usaaaaaaaa", "vsaaaaaaaa", "wsaaaaaaaa", "xsaaaaaaaa", "ysaaaaaaaa", "zsaaaaaaaa", "ataaaaaaaa", "btaaaaaaaa", "ctaaaaaaaa", "dtaaaaaaaa", "etaaaaaaaa", "ftaaaaaaaa", "gtaaaaaaaa", "htaaaaaaaa", "itaaaaaaaa", "jtaaaaaaaa", "ktaaaaaaaa", "ltaaaaaaaa", "mtaaaaaaaa", "ntaaaaaaaa", "otaaaaaaaa", "ptaaaaaaaa", "qtaaaaaaaa", "rtaaaaaaaa", "staaaaaaaa", "ttaaaaaaaa", "utaaaaaaaa", "vtaaaaaaaa", "wtaaaaaaaa", "xtaaaaaaaa", "ytaaaaaaaa", "ztaaaaaaaa", "auaaaaaaaa", "buaaaaaaaa", "cuaaaaaaaa", "duaaaaaaaa", "euaaaaaaaa", "fuaaaaaaaa", "guaaaaaaaa", "huaaaaaaaa", "iuaaaaaaaa", "juaaaaaaaa", "kuaaaaaaaa", "luaaaaaaaa", "muaaaaaaaa", "nuaaaaaaaa", "ouaaaaaaaa", "puaaaaaaaa", "quaaaaaaaa", "ruaaaaaaaa", "suaaaaaaaa", "tuaaaaaaaa", "uuaaaaaaaa", "vuaaaaaaaa", "wuaaaaaaaa", "xuaaaaaaaa", "yuaaaaaaaa", "zuaaaaaaaa", "avaaaaaaaa", "bvaaaaaaaa", "cvaaaaaaaa", "dvaaaaaaaa", "evaaaaaaaa", "fvaaaaaaaa", "gvaaaaaaaa", "hvaaaaaaaa", "ivaaaaaaaa", "jvaaaaaaaa", "kvaaaaaaaa", "lvaaaaaaaa", "mvaaaaaaaa", "nvaaaaaaaa", "ovaaaaaaaa", "pvaaaaaaaa", "qvaaaaaaaa", "rvaaaaaaaa", "svaaaaaaaa", "tvaaaaaaaa", "uvaaaaaaaa", "vvaaaaaaaa", "wvaaaaaaaa", "xvaaaaaaaa", "yvaaaaaaaa", "zvaaaaaaaa", "awaaaaaaaa", "bwaaaaaaaa", "cwaaaaaaaa", "dwaaaaaaaa", "ewaaaaaaaa", "fwaaaaaaaa", "gwaaaaaaaa", "hwaaaaaaaa", "iwaaaaaaaa", "jwaaaaaaaa", "kwaaaaaaaa", "lwaaaaaaaa", "mwaaaaaaaa", "nwaaaaaaaa", "owaaaaaaaa", "pwaaaaaaaa", "qwaaaaaaaa", "rwaaaaaaaa", "swaaaaaaaa", "twaaaaaaaa", "uwaaaaaaaa", "vwaaaaaaaa", "wwaaaaaaaa", "xwaaaaaaaa", "ywaaaaaaaa", "zwaaaaaaaa", "axaaaaaaaa", "bxaaaaaaaa", "cxaaaaaaaa", "dxaaaaaaaa", "exaaaaaaaa", "fxaaaaaaaa", "gxaaaaaaaa", "hxaaaaaaaa", "ixaaaaaaaa", "jxaaaaaaaa", "kxaaaaaaaa", "lxaaaaaaaa", "mxaaaaaaaa", "nxaaaaaaaa", "oxaaaaaaaa", "pxaaaaaaaa", "qxaaaaaaaa", "rxaaaaaaaa", "sxaaaaaaaa", "txaaaaaaaa", "uxaaaaaaaa", "vxaaaaaaaa", "wxaaaaaaaa", "xxaaaaaaaa", "yxaaaaaaaa", "zxaaaaaaaa", "ayaaaaaaaa", "byaaaaaaaa", "cyaaaaaaaa", "dyaaaaaaaa", "eyaaaaaaaa", "fyaaaaaaaa", "gyaaaaaaaa", "hyaaaaaaaa", "iyaaaaaaaa", "jyaaaaaaaa", "kyaaaaaaaa", "lyaaaaaaaa", "myaaaaaaaa", "nyaaaaaaaa", "oyaaaaaaaa", "pyaaaaaaaa", "qyaaaaaaaa", "ryaaaaaaaa", "syaaaaaaaa", "tyaaaaaaaa", "uyaaaaaaaa", "vyaaaaaaaa", "wyaaaaaaaa", "xyaaaaaaaa", "yyaaaaaaaa", "zyaaaaaaaa", "azaaaaaaaa", "bzaaaaaaaa", "czaaaaaaaa", "dzaaaaaaaa", "ezaaaaaaaa", "fzaaaaaaaa", "gzaaaaaaaa", "hzaaaaaaaa", "izaaaaaaaa", "jzaaaaaaaa", "kzaaaaaaaa", "lzaaaaaaaa", "mzaaaaaaaa", "nzaaaaaaaa", "ozaaaaaaaa", "pzaaaaaaaa", "qzaaaaaaaa", "rzaaaaaaaa", "szaaaaaaaa", "tzaaaaaaaa", "uzaaaaaaaa", "vzaaaaaaaa", "wzaaaaaaaa", "xzaaaaaaaa", "yzaaaaaaaa", "zzaaaaaaaa"];
console.log(findWords(board, words));