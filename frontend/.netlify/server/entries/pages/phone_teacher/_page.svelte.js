import { c as create_ssr_component, b as each, e as escape } from "../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".phone.svelte-ni2694{font-size:0.9em;display:grid;grid-template-columns:2fr 2fr 2fr 1fr 1fr;margin:5px;padding:6px;background-color:darkcyan;border-radius:20px;text-align:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let datas = [
    {
      "이름": "홍길동",
      "학생전화": "010-1111-1111",
      "엄마전화": "010-1111-2222"
    },
    {
      "이름": "김동은",
      "학생전화": "010-2222-1111",
      "엄마전화": "010-2222-2222"
    },
    {
      "이름": "김동은",
      "학생전화": "010-2222-1111",
      "엄마전화": "010-2222-2222"
    },
    {
      "이름": "김동은",
      "학생전화": "010-2222-1111",
      "엄마전화": "010-2222-2222"
    },
    {
      "이름": "김동은",
      "학생전화": "010-2222-1111",
      "엄마전화": "010-2222-2222"
    },
    {
      "이름": "김동은",
      "학생전화": "010-2222-1111",
      "엄마전화": "010-2222-2222"
    },
    {
      "이름": "김동은",
      "학생전화": "010-2222-1111",
      "엄마전화": "010-2222-2222"
    }
  ];
  $$result.css.add(css);
  return `<h1>교사용 전화번호</h1>

${each(datas, (data) => {
    return `<div class="${"phone svelte-ni2694"}"><div>${escape(data.이름)}</div>
    <div>${escape(data.학생전화)}</div>
    <div>${escape(data.엄마전화)}</div>
    <div><i class="${"fa-solid fa-message"}"></i></div>
    <div><i class="${"fa-solid fa-phone-volume"}"></i></div>
</div>`;
  })}`;
});
export {
  Page as default
};
