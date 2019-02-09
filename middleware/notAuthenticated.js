/*export default function ({ store, redirect }) {
  // If the user is authenticated redirect to home page
  if (store.state.user) {
    console.log(context.store.getters['auth/user'])
  }
}*/

export default function (context) {
  if(context.store.getters['auth/user']){
      console.log(context.store.getters['auth/user'])
  }

}
