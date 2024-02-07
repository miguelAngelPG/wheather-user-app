// import { useRouteError } from 'react-router-dom'

import { PageWrapper } from '../components/PageWrapper'

export function Error() {
//   const error = useRouteError()
//   console.error(error)

  return (
    <PageWrapper>
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
        </p>
      </div>
    </PageWrapper>
  )
}