import BuyerFooter from '../../components/BuyerFooter/BuyerFooter'
import BuyerHeader from '../../components/BuyerHeader/BuyerHeader'

export default function BuyerLayout(props) {
  const { children } = props
  return (
    <div>
      <BuyerHeader />
      {children}
      <BuyerFooter />
    </div>
  )
}
