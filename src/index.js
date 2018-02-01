/* this file is only used for debug purpose */
// const func = require('../src/word-ladder');
// let ret = func('hit', 'cog', ["hot", "dot", "dog", "lot", "log", "cog"]);
const func = require('../src/add-two-numbers-ii');
const ListNode = require('../src/_utils/list-node');
//let ret = func("tndsewnllhrtwsvxenkscbivijfqnysamckzoyfnapuotmdexzkkrpmppttficzerdndssuveompqkemtbwbodrhwsfpbmkafpwyedpcowruntvymxtyyejqtajkcjakghtdwmuygecjncxzcxezgecrxonnszmqmecgvqqkdagvaaucewelchsmebikscciegzoiamovdojrmmwgbxeygibxxltemfgpogjkhobmhwquizuwvhfaiavsxhiknysdghcawcrphaykyashchyomklvghkyabxatmrkmrfsppfhgrwywtlxebgzmevefcqquvhvgounldxkdzndwybxhtycmlybhaaqvodntsvfhwcuhvuccwcsxelafyzushjhfyklvghpfvknprfouevsxmcuhiiiewcluehpmzrjzffnrptwbuhnyahrbzqvirvmffbxvrmynfcnupnukayjghpusewdwrbkhvjnveuiionefmnfxao");
let l1 = new ListNode(7);
l1.next = new ListNode(2);
l1.next.next = new ListNode(4);
l1.next.next.next = new ListNode(3);
let l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);
let ret = func(l1, l2);
