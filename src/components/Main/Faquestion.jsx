

const Faquestion = () => {
    return (
        <div className="">
            <section className="bg-gray-100 text-gray-800">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h2 className="mb-12 text-4xl font-bold leadi text-center sm:text-5xl">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ri">What are the benefits of using a ToolLander website?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">Using ToolLander website can save users money by allowing them to borrow tools instead of buying them. It can also help reduce waste by promoting the sharing of resources and can foster a sense of community by connecting people who have similar interests.</p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ri">What are the rules and regulations for using ToolLander website?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">The rules and regulations for using ToolLander website may vary depending on the website. Users should review the terms and conditions of the website before using it to ensure they understand the rules and regulations.</p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ri">What happens if a tool is damaged or lost while being borrowed?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">The lender and borrower should agree on the terms of the loan before the tool is borrowed. This can include details about liability and insurance. If a tool is damaged or lost, the borrower may be responsible for repairing or replacing it.</p>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Faquestion;