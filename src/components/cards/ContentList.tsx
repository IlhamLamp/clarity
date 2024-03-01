const ContentList: React.FC = () => {
    return (
        <div className="mt-10">
            <h2 className="font-semibold text-3xl text-dark mb-6">Kikagaku moyou wo tadotte aruku</h2>
            <p className="text-body">
                Sed ullamcorper dui at risus viverra, nec cursus leo ullamcorper. Class aptent taciti 
                sociosqu ad litora torquent per conubia nostra, per cursus himenaeos.
            </p>
            <ul className="flex flex-col gap-4 mt-5">
                <li className="flex gap-2 text-body">
                    <span>1.</span>
                    <p>
                        <span className="text-bold font-semibold">Onaji tokoro de tadoritsuita </span>{''}
                        viverra, nec cursus leo ullamcorper nec cursus leo
                        ullamcorper. Class aptent taciti sociosqu ad litora
                        torquent per conubia nostra, per cursus himenaeos.
                    </p>
                </li>
                <li className="flex gap-2 text-body">
                    <span>2.</span>
                    <p>
                        <span className="text-bold font-semibold">Amatta sode wo hikitometeru </span>{''}
                        viverra, nec cursus leo ullamcorper nec cursus leo
                        ullamcorper. Class aptent taciti sociosqu ad litora
                        torquent per conubia nostra, per cursus himenaeos.
                    </p>
                </li>
                <li className="flex gap-2 text-body">
                    <span>3.</span>
                    <p>
                        <span className="text-bold font-semibold">Kimi to iru kyou ga zutto </span>{''}
                        viverra, nec cursus leo ullamcorper nec cursus leo
                        ullamcorper. Class aptent taciti sociosqu ad litora
                        torquent per conubia nostra, per cursus himenaeos.
                    </p>
                </li>
                <li className="flex gap-2 text-body">
                    <span>4.</span>
                    <p>
                        <span className="text-bold font-semibold">Kiseki mitai de sakenda </span>{''}
                        viverra, nec cursus leo ullamcorper nec cursus leo
                        ullamcorper. Class aptent taciti sociosqu ad litora
                        torquent per conubia nostra, per cursus himenaeos.
                    </p>
                </li>
            </ul>
        </div>
    )
}

export default ContentList;