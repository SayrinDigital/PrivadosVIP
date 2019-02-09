export default function ({ store, redirect }) {
  // If the user is authenticated redirect to home page
  if (store.state.role === 'client') {
  return redirect('/panel/cliente')
  }
}
