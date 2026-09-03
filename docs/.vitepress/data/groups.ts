/** Documentation categories. `order` drives both the sidebar and the home page. */
export interface Group {
  id: string
  order: number
  label: { zh: string; en: string }
  blurb: { zh: string; en: string }
}

export const groups: Group[] = [
  {
    id: 'basic',
    order: 1,
    label: { zh: '基础组件', en: 'Basic' },
    blurb: {
      zh: '按钮、图标、文本、图片等构成界面的最小单元。',
      en: 'Buttons, icons, text and images — the smallest building blocks.'
    }
  },
  {
    id: 'layout',
    order: 2,
    label: { zh: '布局组件', en: 'Layout' },
    blurb: {
      zh: '栅格、单元格、卡片、分割线，负责页面的骨架。',
      en: 'Grids, cells, cards and dividers that frame a page.'
    }
  },
  {
    id: 'form',
    order: 3,
    label: { zh: '表单组件', en: 'Form' },
    blurb: {
      zh: '输入、校验、选择器与开关，覆盖完整的数据录入链路。',
      en: 'Inputs, validation, pickers and switches for full data entry.'
    }
  },
  {
    id: 'feedback',
    order: 4,
    label: { zh: '反馈组件', en: 'Feedback' },
    blurb: {
      zh: '弹窗、提示、加载与操作面板，负责与用户的即时对话。',
      en: 'Dialogs, toasts, loaders and sheets — the instant conversation.'
    }
  },
  {
    id: 'nav',
    order: 5,
    label: { zh: '导航组件', en: 'Navigation' },
    blurb: {
      zh: '导航栏、标签栏、步骤条，帮助用户理解自己身在何处。',
      en: 'Nav bars, tab bars and steppers that tell users where they are.'
    }
  },
  {
    id: 'data',
    order: 6,
    label: { zh: '数据组件', en: 'Data display' },
    blurb: {
      zh: '表格、树、瀑布流、骨架屏，承载复杂数据的呈现。',
      en: 'Tables, trees, waterfalls and skeletons for complex data.'
    }
  },
  {
    id: 'other',
    order: 7,
    label: { zh: '其他组件', en: 'Others' },
    blurb: {
      zh: '尚未归类，或跨越多个分类的通用能力。',
      en: 'Utilities that span — or have yet to find — a category.'
    }
  }
]

export const groupMap: Record<string, Group> = Object.fromEntries(
  groups.map((g) => [g.id, g])
)
