import Image from "next/image";

const ContentHorizontal: React.FC = () => {
    return (
        <div className="flex flex-wrap items-center gap-7 mt-10">
            <div className="lg:max-w-[360px] w-full">
                <Image 
                    src={'https://clarity-tailwind.preview.uideck.com/images/blog-single-06.png'}
                    alt="blog" className="w-full" width={360} height={365}
                />
            </div>
            <div className="lg:max-w-[380px] w-full">
                <h3 className="font-bold text-3xl text-black mb-4">sode no kiruto</h3>
                <p className="mb-5 text-body">
                    幾何学模様を 辿って歩く
                    同じ所で たどり着いた 
                    余った袖を 引き止めてる
                    君といる今日が ずっと
                    奇跡みたいで 叫んだ
                </p>
                <p className="text-body">
                    忘れたくない 一瞬の声
                    君が靡く 僕は願う
                    今はまだ このままで
                    不揃いのサビ 繫ぐ花火
                    言いたい言葉 走って
                    叫びたい気持ちを 恥じらって
                    思い出せる 僕を着ると
                </p>
            </div>
        </div>
    )
}

export default ContentHorizontal;