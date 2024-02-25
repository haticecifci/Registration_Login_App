/* __placeholder__ */
export default (await import('vue')).defineComponent({
name: 'App',
created() {
const userInfo = localStorage.getItem('userInfo');
const expDate = localStorage.getItem('expDate');
try {
if (Date.now() > Number(expDate)) {
this.$store.commit('setUserInfo', {});
this.$router.replace('/login');
localStorage.clear();
}
const td = Number(expDate) - Date.now();
setTimeout(() => {
this.$store.commit('setUserInfo', {});
this.$router.replace('/login');
}, td);
this.$store.commit('setUserInfo', JSON.parse(userInfo));
} catch {
console.log("Hata!");
}
}
});
