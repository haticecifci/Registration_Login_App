import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name } from './AuthView.vue';

function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {};
__VLS_intrinsicElements.form; __VLS_intrinsicElements.form;
__VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div;
__VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label;
__VLS_intrinsicElements.input; __VLS_intrinsicElements.input;
__VLS_intrinsicElements.button; __VLS_intrinsicElements.button;
{
const __VLS_0 = __VLS_intrinsicElements["form"];
const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
const __VLS_2 = __VLS_1({ ...{ onSubmit: {} as any, }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{ onSubmit: {} as any, }, });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
let __VLS_5 = { 'submit': __VLS_pickEvent(__VLS_4['submit'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_1, typeof __VLS_2>).onSubmit) };
__VLS_5 = { submit: (__VLS_ctx.validateForm) };
{
const __VLS_6 = __VLS_intrinsicElements["div"];
const __VLS_7 = __VLS_elementAsFunctionalComponent(__VLS_6);
const __VLS_8 = __VLS_7({ ...{}, class: ("mb-3"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_6, typeof __VLS_8> & Record<string, unknown>) => void)({ ...{}, class: ("mb-3"), });
const __VLS_9 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8)!;
let __VLS_10!: __VLS_NormalizeEmits<typeof __VLS_9.emit>;
{
const __VLS_11 = __VLS_intrinsicElements["label"];
const __VLS_12 = __VLS_elementAsFunctionalComponent(__VLS_11);
const __VLS_13 = __VLS_12({ ...{}, for: ("exampleInputEmail1"), class: ("form-label"), }, ...__VLS_functionalComponentArgsRest(__VLS_12));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_11, typeof __VLS_13> & Record<string, unknown>) => void)({ ...{}, for: ("exampleInputEmail1"), class: ("form-label"), });
const __VLS_14 = __VLS_pickFunctionalComponentCtx(__VLS_11, __VLS_13)!;
let __VLS_15!: __VLS_NormalizeEmits<typeof __VLS_14.emit>;
(__VLS_14.slots!).default;
}
{
const __VLS_16 = __VLS_intrinsicElements["input"];
const __VLS_17 = __VLS_elementAsFunctionalComponent(__VLS_16);
const __VLS_18 = __VLS_17({ ...{}, type: ("email"), class: ("form-control bg-dark text-light "), id: ("exampleInputEmail1"), "aria-describedby": ("emailHelp"), }, ...__VLS_functionalComponentArgsRest(__VLS_17));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_16, typeof __VLS_18> & Record<string, unknown>) => void)({ ...{}, type: ("email"), class: ("form-control bg-dark text-light "), id: ("exampleInputEmail1"), "aria-describedby": ("emailHelp"), });
const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_16, __VLS_18)!;
let __VLS_20!: __VLS_NormalizeEmits<typeof __VLS_19.emit>;
(__VLS_ctx.user.email);
(__VLS_ctx.errors.email ? 'is-invalid' : '');
}
{
const __VLS_21 = __VLS_intrinsicElements["div"];
const __VLS_22 = __VLS_elementAsFunctionalComponent(__VLS_21);
const __VLS_23 = __VLS_22({ ...{}, id: ("emailHelp"), class: ("form-text text-light"), }, ...__VLS_functionalComponentArgsRest(__VLS_22));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_21, typeof __VLS_23> & Record<string, unknown>) => void)({ ...{}, id: ("emailHelp"), class: ("form-text text-light"), });
const __VLS_24 = __VLS_pickFunctionalComponentCtx(__VLS_21, __VLS_23)!;
let __VLS_25!: __VLS_NormalizeEmits<typeof __VLS_24.emit>;
(__VLS_24.slots!).default;
}
(__VLS_9.slots!).default;
}
{
const __VLS_26 = __VLS_intrinsicElements["div"];
const __VLS_27 = __VLS_elementAsFunctionalComponent(__VLS_26);
const __VLS_28 = __VLS_27({ ...{}, class: ("invalid-feedback"), }, ...__VLS_functionalComponentArgsRest(__VLS_27));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_26, typeof __VLS_28> & Record<string, unknown>) => void)({ ...{}, class: ("invalid-feedback"), });
const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28)!;
let __VLS_30!: __VLS_NormalizeEmits<typeof __VLS_29.emit>;
(__VLS_29.slots!).default;
}
{
const __VLS_31 = __VLS_intrinsicElements["div"];
const __VLS_32 = __VLS_elementAsFunctionalComponent(__VLS_31);
const __VLS_33 = __VLS_32({ ...{}, class: ("mb-3"), }, ...__VLS_functionalComponentArgsRest(__VLS_32));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_31, typeof __VLS_33> & Record<string, unknown>) => void)({ ...{}, class: ("mb-3"), });
const __VLS_34 = __VLS_pickFunctionalComponentCtx(__VLS_31, __VLS_33)!;
let __VLS_35!: __VLS_NormalizeEmits<typeof __VLS_34.emit>;
{
const __VLS_36 = __VLS_intrinsicElements["label"];
const __VLS_37 = __VLS_elementAsFunctionalComponent(__VLS_36);
const __VLS_38 = __VLS_37({ ...{}, for: ("exampleInputPassword1"), class: ("form-label"), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_36, typeof __VLS_38> & Record<string, unknown>) => void)({ ...{}, for: ("exampleInputPassword1"), class: ("form-label"), });
const __VLS_39 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38)!;
let __VLS_40!: __VLS_NormalizeEmits<typeof __VLS_39.emit>;
(__VLS_39.slots!).default;
}
{
const __VLS_41 = __VLS_intrinsicElements["input"];
const __VLS_42 = __VLS_elementAsFunctionalComponent(__VLS_41);
const __VLS_43 = __VLS_42({ ...{}, type: ("password"), class: ("form-control bg-dark text-light"), id: ("exampleInputPassword1"), }, ...__VLS_functionalComponentArgsRest(__VLS_42));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_41, typeof __VLS_43> & Record<string, unknown>) => void)({ ...{}, type: ("password"), class: ("form-control bg-dark text-light"), id: ("exampleInputPassword1"), });
const __VLS_44 = __VLS_pickFunctionalComponentCtx(__VLS_41, __VLS_43)!;
let __VLS_45!: __VLS_NormalizeEmits<typeof __VLS_44.emit>;
(__VLS_ctx.user.password);
(__VLS_ctx.errors.password ? 'is-invalid' : '');
}
{
const __VLS_46 = __VLS_intrinsicElements["div"];
const __VLS_47 = __VLS_elementAsFunctionalComponent(__VLS_46);
const __VLS_48 = __VLS_47({ ...{}, class: ("invalid-feedback"), }, ...__VLS_functionalComponentArgsRest(__VLS_47));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_46, typeof __VLS_48> & Record<string, unknown>) => void)({ ...{}, class: ("invalid-feedback"), });
const __VLS_49 = __VLS_pickFunctionalComponentCtx(__VLS_46, __VLS_48)!;
let __VLS_50!: __VLS_NormalizeEmits<typeof __VLS_49.emit>;
(__VLS_49.slots!).default;
}
(__VLS_34.slots!).default;
}
(__VLS_ctx.$store.getters.getUserInfo);
{
const __VLS_51 = __VLS_intrinsicElements["button"];
const __VLS_52 = __VLS_elementAsFunctionalComponent(__VLS_51);
const __VLS_53 = __VLS_52({ ...{}, type: ("submit"), class: ("btn btn-primary w-100"), }, ...__VLS_functionalComponentArgsRest(__VLS_52));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_51, typeof __VLS_53> & Record<string, unknown>) => void)({ ...{}, type: ("submit"), class: ("btn btn-primary w-100"), });
const __VLS_54 = __VLS_pickFunctionalComponentCtx(__VLS_51, __VLS_53)!;
let __VLS_55!: __VLS_NormalizeEmits<typeof __VLS_54.emit>;
(__VLS_ctx.$route.fullPath.includes('register') ? "Kayıt Ol" : "Giriş Yap");
(__VLS_54.slots!).default;
}
(__VLS_3.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!: {};
// @ts-ignore
[validateForm, user, errors, user, errors, $store, $route,];
return __VLS_slots;
}
