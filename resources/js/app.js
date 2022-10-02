import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { InertiaProgress } from '@inertiajs/progress';
import Layout from "./Shared/Layout.vue";
createInertiaApp({
    // resolve:
    //     async (name) => {
    //         const pages = import.meta.glob('./Pages/**/*.vue');
    //
    //         return (await pages[`./Pages/${name}.vue`]()).default;
    //     },
    resolve: (name) => {
        let page = resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob('./Pages/**/*.vue')
        );
        page.then((module) => {
            module.default.layout ??= Layout;
        });
        return page
    },

    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .mount(el)
    },
})
InertiaProgress.init({
    color: 'red',
    showSpinner: true,
})
