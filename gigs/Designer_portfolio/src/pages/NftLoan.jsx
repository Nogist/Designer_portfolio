import Image from "next/image"
import nft from '@/assets/nftloan.png';


export default function NftLoan () {
  return (
    <div className="w-full h-full flex items-center border-[0px] justify-center">
      <Image 
        src={nft}
        width= 'auto'
        height= 'auto'
        alt= 'projectImage'
        layout="responsive"
      />
  </div>
  )
}