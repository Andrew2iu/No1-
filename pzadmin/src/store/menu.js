const state = {
    // 实现aside展开收回
    isCollapse: false,
    selectMenu: [],
};
const mutations = {
    // 实现aside展开收回
    collapseMenu(state) {
        state.isCollapse = !state.isCollapse;
    },
    addMenu(state, payload) {
        //对数据去重
        if (
            state.selectMenu.findIndex((item) => item.path === payload.path) ===
            -1
        ) {
            state.selectMenu.push(payload);
        }
    },
    closeMenu(state, payload){
        // 找到点击数据的索引
       const index= state.selectMenu.findIndex(val=>val.name===payload.name)
        // 通过索引删除数组指定元素
       state.selectMenu.splice(index,1)
    }
};

export default {
    state,
    mutations,
};
