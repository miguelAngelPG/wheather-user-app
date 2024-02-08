import { PageWrapper } from '../components/PageWrapper'
import { HeaderBack } from '../components/HeaderBack'

export function ErrorPage() {

  return (
    <PageWrapper>
      <HeaderBack />

      <div id="error-page">
        <h1>Oops!</h1>
        <p>Lo sentimos, se ha producido un error inesperado.</p>
      </div>
    </PageWrapper>
  )
}