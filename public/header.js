import {
    HomeIcon,
    UserIcon,
    EnvelopeIcon,
    BellAlertIcon,
    GlobeAltIcon,
} from '@heroicons/react/24/outline'

export default function Home() {
    return (
        <>
            <div className="bg-purple-800 py-2">
                <section className="container mx-auto">
                    <div className="grid grid-cols-2 items-center">
                        <div className="w-full hidden lg:block">
                            <img
                                src="https://www.catalystswings.com/public/img/2.png"
                                alt=""
                            />
                        </div>
                        <div className="w-full hidden lg:block">
                            <ul className="flex items-center justify-end gap-8">
                                <li>
                                    <a href="#" className="text-white">
                                        <HomeIcon className="h-6 w-6 " />{' '}
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-lg text-white">
                                        <UserIcon className="h-6 w-6" />{' '}
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-white relative">
                                        <EnvelopeIcon className="h-6 w-6" />
                                        <span className="absolute -top-4 -right-3">
                                            2
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-white relative">
                                        <BellAlertIcon className="h-6 w-6" />
                                        <span className="absolute -top-4 -right-3">
                                            2
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <form className="w-full bg-inherit">
                                        <fieldset>
                                            <div>
                                                <select className="w-full py-1 border-none">
                                                    <option value="1">
                                                        English
                                                    </option>
                                                    <option value="2">
                                                        Bangla
                                                    </option>
                                                </select>
                                            </div>
                                        </fieldset>
                                    </form>
                                </li>
                            </ul>
                        </div>
                        <div className="lg:hidden md:block">mobile</div>
                    </div>
                </section>
            </div>
        </>
    )
}
