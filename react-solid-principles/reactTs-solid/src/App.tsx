import SingleResponsibilityPrinciple from './SingleResponsibilityPrinciple';
import { TitleWithButton, TitleWithLink } from './OpenClosedPrinciple';
import DependencyInversionPrinciple from './DependencyInversionPrinciple';

export default function App() {

  return (
    <div>
      {/* <SingleResponsibilityPrinciple /> */}
      {/* <TitleWithButton title='Solid in react' buttonText='Hola' onClick={() => alert('Hola!')} /> */}
      {/* <TitleWithLink title='My portoflio:' buttonText='Ir a port' href='https://jeandv.vercel.app' /> */}
      <DependencyInversionPrinciple />
    </div>
  )

}