export default ({ redirect, route }) => {
  if (!route.params.key) {
    redirect('/weather/london')
  }
}
