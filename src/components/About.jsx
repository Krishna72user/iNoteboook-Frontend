import { NavLink } from "react-router-dom"
export default function About() {
    return (
        <>
            <div className="min-h-screen py-10 pt-30 md:pt-10 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center px-6">
                <div className="bg-white shadow-lg rounded-2xl p-8 max-w-3xl text-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">About <span className="text-blue-500">iNotebook</span></h1>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        iNotebook is a modern cloud-based note-taking application that allows you to create, manage,
                        and organize your notes effortlessly. Your data is stored securely, ensuring easy access
                        from anywhere.
                    </p>

                    <div className="mt-6">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-3">Key Features 🚀</h2>
                        <ul className="text-gray-600 text-lg space-y-2">
                            <li className="flex items-center gap-2">
                                ✅ Secure authentication for user data protection
                            </li>
                            <li className="flex items-center gap-2">
                                ✅ Fast and seamless note creation and editing
                            </li>
                            <li className="flex items-center gap-2">
                                ✅ Organize notes with customizable tags
                            </li>
                            <li className="flex items-center gap-2">
                                ✅ Cloud storage for accessibility from any device
                            </li>
                            <li className="flex items-center gap-2">
                                ✅ Minimalist and user-friendly interface
                            </li>
                        </ul>
                    </div>

                    <div className="mt-8">
                        <p className="text-gray-600 text-lg">Start using iNotebook today and keep your thoughts organized!</p>
                        <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
                         <NavLink to="/"end>Get Started</NavLink>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}