export default function FourthSection(props) {
  const ref = props.refProp;
  return (
    <section
      ref={ref}
      id="fourth-section"
      className="flex  min-h-screen  max-md:mt-5 max-md:mb-36 max-md:p-5 mb-16"
    >
      <div className="max-w-screen-xl max-md:max-w-sm w-full mx-auto">
        <div className="flex flex-col w-full md:pt-32 pt-16">
          <h1 className="text-5xl text-[#407BFF] font-bold mx-auto font-nunito">
            Contactez Nous!
          </h1>
          <form
            action=""
            className="flex  w-full flex-col mx-auto md:w-5/12 md:mt-20 mt-16"
          >
            <label
              for="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 mt-5"
            >
              Nom et Prénom
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 mt-5"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
            <label
              for="objet"
              className="block mb-2 text-sm font-medium text-gray-900 mt-5"
            >
              Objet
            </label>
            <input
              type="text"
              id="objet"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900 mt-5"
            >
              Message
            </label>
            <textarea
              type="text"
              id="message"
              class="bg-gray-50 border h-48 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
            <button
              type="submit"
              class="bg-[#407BFF] text-white font-bold text-lg rounded-lg mt-5 py-2.5"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
