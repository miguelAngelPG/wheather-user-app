// import { useRouteError } from 'react-router-dom'

import { Wrapper } from '../components/Wrapper'

export function Error() {
//   const error = useRouteError()
//   console.error(error)

  return (
    <Wrapper>
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
        </p>
      </div>
    </Wrapper>
  )
}