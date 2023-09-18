export default defineNuxtRouteMiddleware((to, from) => {
    // Прокрутка вверх при обновлении страницы
    useNuxtApp().hook("page:finish", () => {
      if (history.state.scroll) {
        setTimeout(() => window.scrollTo(history.state.scroll), 0);
      } else {
        setTimeout(() => window.scrollTo(0, 0), 0);
      }
    });
  })