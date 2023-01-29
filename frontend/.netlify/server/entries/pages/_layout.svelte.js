import { c as create_ssr_component, e as escape, b as each, d as null_to_empty, f as add_attribute } from "../../chunks/index.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: 'slot.svelte-t44r1d.svelte-t44r1d{position:relative;z-index:1}nav.svelte-t44r1d.svelte-t44r1d{background-color:rgba(26, 33, 43, 0.8);font-family:"Helvetica Neue", "Helvetica", "Arial", sans-serif;height:45px;position:relative;z-index:3}.inner.svelte-t44r1d.svelte-t44r1d{max-width:980px;padding-left:20px;padding-right:20px;margin:auto;box-sizing:border-box;display:flex;align-items:center;height:100%}.mobile-icon.svelte-t44r1d.svelte-t44r1d{width:25px;height:14px;position:relative;cursor:pointer}.mobile-icon.svelte-t44r1d.svelte-t44r1d:after,.mobile-icon.svelte-t44r1d.svelte-t44r1d:before,.middle-line.svelte-t44r1d.svelte-t44r1d{content:"";position:absolute;width:100%;height:2px;background-color:#fff;transition:all 0.4s;transform-origin:center}.mobile-icon.svelte-t44r1d.svelte-t44r1d:before,.middle-line.svelte-t44r1d.svelte-t44r1d{top:0}.mobile-icon.svelte-t44r1d.svelte-t44r1d:after,.middle-line.svelte-t44r1d.svelte-t44r1d{bottom:0}.mobile-icon.svelte-t44r1d.svelte-t44r1d:before{width:66%}.mobile-icon.svelte-t44r1d.svelte-t44r1d:after{width:33%}.middle-line.svelte-t44r1d.svelte-t44r1d{margin:auto}.mobile-icon.svelte-t44r1d.svelte-t44r1d:hover:before,.mobile-icon.svelte-t44r1d.svelte-t44r1d:hover:after,.mobile-icon.active.svelte-t44r1d.svelte-t44r1d:before,.mobile-icon.active.svelte-t44r1d.svelte-t44r1d:after,.mobile-icon.active.svelte-t44r1d .middle-line.svelte-t44r1d{width:100%}.mobile-icon.active.svelte-t44r1d.svelte-t44r1d:before,.mobile-icon.active.svelte-t44r1d.svelte-t44r1d:after{top:50%;transform:rotate(-45deg)}.mobile-icon.active.svelte-t44r1d .middle-line.svelte-t44r1d{transform:rotate(45deg)}.navbar-list.svelte-t44r1d.svelte-t44r1d{display:none;width:100%;justify-content:space-between;margin:0;padding:0 40px}.navbar-list.mobile.svelte-t44r1d.svelte-t44r1d{background-color:rgba(26, 33, 43, 0.8);position:fixed;display:block;height:calc(100% - 45px);bottom:0;left:0}.navbar-list.svelte-t44r1d li.svelte-t44r1d{list-style-type:none;position:relative}.navbar-list.svelte-t44r1d li.svelte-t44r1d:before{content:"";position:absolute;bottom:0;left:0;width:100%;height:1px;background-color:#424245}.navbar-list.svelte-t44r1d a.svelte-t44r1d{color:#fff;text-decoration:none;display:flex;height:45px;align-items:center;padding:0 10px;font-size:13px}@media only screen and (min-width: 767px){.mobile-icon.svelte-t44r1d.svelte-t44r1d{display:none}.navbar-list.svelte-t44r1d.svelte-t44r1d{display:flex;padding:0}.navbar-list.svelte-t44r1d a.svelte-t44r1d{display:inline-flex}}',
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const navItems = [
    { label: "대신고등학교", href: "/" },
    { label: "3학년게시판", href: "/board" },
    { label: "학생전화", href: "phone_student" },
    { label: "교사전화", href: "phone_teacher" },
    { label: "문서열람", href: "docs" },
    { label: "다운로드", href: "down" },
    { label: "ToDo", href: "todo" }
  ];
  $$result.css.add(css);
  return `



<nav class="${"svelte-t44r1d"}"><div class="${"inner svelte-t44r1d"}"><div class="${escape(null_to_empty(`mobile-icon${""}`), true) + " svelte-t44r1d"}"><div class="${"middle-line svelte-t44r1d"}"></div></div>
    <ul class="${escape(null_to_empty(`navbar-list${""}`), true) + " svelte-t44r1d"}">${each(navItems, (item) => {
    return `<li class="${"svelte-t44r1d"}"><a${add_attribute("href", item.href, 0)} class="${"svelte-t44r1d"}">${escape(item.label)}</a>
        </li>`;
  })}</ul></div></nav>
${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
