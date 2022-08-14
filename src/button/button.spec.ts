import SButton from "./index";

import { shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
// 测试分组
describe('Button', () => {
  // mount
  test("mount  @vue/test-utils", () => {
    // @vue/test-utils
    const wrapper = shallowMount(SButton, {
      slots: {
        default: 'Button'
      }
    });
    
    // 断言
    expect(wrapper.text()).toBe("Button");

  });
 })

describe('color', () => {
  test("default", () => {
    const wrapper = shallowMount(SButton, {
      slots: {
        default: 'Button'
      }
    });
    console.log(wrapper.classes())
    expect(wrapper.classes().includes('bg-blue-500')).toBe(true)
  });

  test("red", () => {
    const wrapper = shallowMount(SButton, {
      slots: {
        default: 'Button'
      },
      props: {
        color: 'red'
      }
    });
    expect(wrapper.classes().includes('bg-red-500')).toBe(true)
  });
})

describe('size', () => {
  test("default", () => {
    const wrapper = shallowMount(SButton, {
      slots: {
        default: 'Button'
      }
    });
    expect(wrapper.classes().includes('px-3')).toBe(true)
  }),
  test("small", () => {
    const wrapper = shallowMount(SButton, {
      slots: {
        default: 'Button'
      },
      props: {
        size: 'small'
      }
    });
    expect(wrapper.classes().includes('px-2')).toBe(true)
  }),
  test("large", () => {
    const wrapper = shallowMount(SButton, {
      slots: {
        default: 'Button'
      },
      props: {
        size: 'large'
      }
    });
    expect(wrapper.classes().includes('px-4')).toBe(true)
  })
})