import { Icon } from '@iconify/react/dist/iconify.js';
import React, { FormEvent } from 'react';
import phone from '@iconify-icons/mdi/phone';
import telephone from '@iconify-icons/mdi/phone-classic';
import mail from '@iconify-icons/mdi/email';
import person from '@iconify-icons/mdi/person';
import location from '@iconify-icons/mdi/location';

class FormContactT {
  name = '' as string;
  email = '' as string;
  phoneNumber = '' as string;
  object = '' as string;
  Msg = '' as string;
}

function ContactUs() {
  const [check, setCheck] = React.useState<boolean>(false);
  const [contactForm, setContactForm] = React.useState<FormContactT>(
    new FormContactT()
  );
  const validForm = React.useMemo(() => {
    return check && Object.values(contactForm).every((item) => item);
  }, [check, contactForm]);
  const contactInfo: { icon: typeof person; text: string }[] = [
    { icon: person, text: 'Hocine Koulache' },
    { icon: location, text: '‌Josf-wild-str.14xx97294 Unterpleichfeld' },
    { icon: phone, text: '+49 173 6408501' },
    { icon: telephone, text: '+49 936 9878905' },
    { icon: mail, text: 'info@koulache.de' },
  ];

  const submitForm = (e: FormEvent) => {
    e.preventDefault();
    console.log('Submit');
  };
  return (
    <div className=" site-section" id="contact">
      <form onSubmit={submitForm}>
        <div className=" container">
          <h1 className=" text-center text-primary font-bold text-2xl md:text-3xl italic">
            kontaktiere uns
          </h1>
          <div className=" bg-secondary py-8 px-5 my-9 rounded-md text-white mx-2">
            <h4 className=" font-bold text-xl md:text-2xl">
              Kontaktieren Sie uns
            </h4>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 my-7 ">
              <div className=" grid grid-cols-2 gap-3">
                <input
                  placeholder="Vollständige Name"
                  id="name"
                  name="name"
                  onChange={(e) => {
                    setContactForm({
                      ...contactForm,
                      name: e.currentTarget.value,
                    });
                  }}
                />
                <input
                  placeholder="E-mail"
                  type="email"
                  id="email"
                  name="email"
                  onChange={(e) => {
                    setContactForm({
                      ...contactForm,
                      email: e.currentTarget.value,
                    });
                  }}
                />
                <input
                  placeholder="Telefonnummer"
                  id="phoneNumber"
                  name="phoneNumber"
                  onChange={(e) => {
                    setContactForm({
                      ...contactForm,
                      phoneNumber: e.currentTarget.value,
                    });
                  }}
                />
                <input
                  placeholder="Betreff"
                  id="Object"
                  name="Object"
                  onChange={(e) => {
                    setContactForm({
                      ...contactForm,
                      object: e.currentTarget.value,
                    });
                  }}
                />
                <textarea
                  className=" col-span-2"
                  placeholder="Ihr Nachricht"
                  id="Msg"
                  name="Msg"
                  onChange={(e) => {
                    setContactForm({
                      ...contactForm,
                      Msg: e.currentTarget.value,
                    });
                  }}
                />
                <div className=" col-span-2 flex items-center justify-start gap-2">
                  <img
                    src={check ? '/check.svg' : ' /checked.svg'}
                    className=" cursor-pointer"
                    onClick={() => setCheck(!check)}
                  />
                  <label className=" underline">
                    Ich akzeptiere die Datenschutzrichtlinien{' '}
                  </label>
                </div>
                <div className=" col-span-2">
                  <button
                    disabled={!validForm}
                    type="submit"
                    className=" bg-white/70 text-primary font-bold hover:bg-white disabled:hover:bg-white/40 disabled:bg-white/40 w-full p-3 rounded-lg"
                  >
                    Submit
                  </button>
                </div>
              </div>
              <div className=" flex items-start md:mx-auto justify-start md:justify-center flex-col  gap-4 md:gap-10">
                {contactInfo.map((item, index) => {
                  return (
                    <div
                      className=" flex items-center  justify-start gap-3 "
                      key={index}
                    >
                      <Icon icon={item.icon} fontSize={30} />
                      <div>
                        <h3 className=" font-medium text-md md:text-lg font-number">
                          {item.text.split('xx')[0]}
                        </h3>
                        <h3 className=" font-medium text-md md:text-lg font-number">
                          {item.text.split('xx')[1]}
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactUs;
