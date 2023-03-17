import type JQuery from 'jquery';

export function createJQueryFn(ComponentClassType: any, name?: string) {
    function fn(this: JQuery, options?: string | Record<string, unknown>, ...args: unknown[]) {
        return $(this).each(function () {
            const $e = $(this);
            const component = $e.data(ComponentClassType.KEY);
            if (component) {
                if (typeof options === 'string') {
                    component[options]?.(...args);
                }
            } else {
                if (typeof options === 'string') {
                    options = {};
                }
                $e.data(ComponentClassType.KEY, new ComponentClassType(this, {
                    ...$e.data(),
                    ...options,
                }));
            }
        });
    }

    $.extend(true, $, {zui3: {[name ?? ComponentClassType.NAME]: ComponentClassType}, fn: {[(name ?? ComponentClassType.NAME).toLowerCase()]: fn}});
}
