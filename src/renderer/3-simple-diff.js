// 简单diff算法
// 简单来说，当新旧vNode都是一组节点是，为了以最小性能开销进行更新操作，需要对比两组节点，找出差异。对比两组节点的算法就是diff算法。

// 1. 减少DOm操作的性能开销
//    之前简单版本是通过全量卸载/新增节点进行两组节点的更新。这样操作DOM元素，性能损耗大
// 对比两组节点可能有三种情况
// 1）新旧节点数量相同：按顺序比较，标签相同时可复用DOM，只更新属性/内容等
// 2）新节点比旧节点多：遍历旧节点进行比较，然后进行patch。没有比较的新节点是需要新增的，走新增节点方法。
// 3）新节点比旧节点少：遍历新节点进行比较。没有对比的旧节点是需要移除的，走移除方法。
// 由上可知，对比的时候，是遍历其中长度较短的一组。然后对比长度，再判断余下的节点是新增还是卸载。这样进行操作的话减少了DOM元素的操作，提升了更新性能。



// 2. DOM复用与key的作用
// 当两组节点不仅仅是更新内容，还变更了顺序时，那相同节点可能对应不起来，从而导致全量更新
// 这个时候可以给每个vNode添加唯一的key作为表示。在节点顺序不同时。通过遍历，找到key相同的vNode进行patch，然后再移动相应的顺序即可。（例如：遍历新节点，遍历找出与新节点相同 key 的旧节点。进行patch。然后移动顺序）



// 3. 找到需要移动的节点（根据当前最大索引值来判断。）



// 4. 移动元素 用旧节点列表的索引对比 移动到对应的位置 说起来太复杂 详情见代码



// 5. 新增节点 对比key，找不到的话就走新增，位置在上一个节点的真实DOM位置后



// 6. 移除不存在的元素 遍历完新节点数组后，再遍历一遍旧节点数组，如果有key匹配不到的节点，则是需要移除的节点，卸载即可
