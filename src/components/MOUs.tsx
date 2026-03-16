import React from 'react';
import '../styles/MOUs.css';

interface MOUsProps {
  language: 'en' | 'hi';
  onBack: () => void;
}

const MOUs: React.FC<MOUsProps> = ({ language, onBack }) => {
  const content = {
    en: {
      title: 'MOUs',
      mainHeading: 'MOUs - Memoranda of Understanding',
      description: 'Sri Dev Suman Uttarakhand University has signed MOUs with various institutions as follows:',
      mous: [
        'Sri Dev Suman University behind Krihyaksha with medical professionals from MCI, issued Medical Certification to students for 06 months internship with MCI and with Krihyaksha, mutual cooperation agreement was signed.',
        'Vignanjeevr with major research establishments and IT security Advertising awards regarding awareness and research and development and skill development programs with MUKT (Government of Uttarakhand) signed a mutual cooperation agreement on skill development.',
        'With the Government (Government of Uttarakhand) signed a mutual cooperation agreement.',
        '• With Sri Dev Suman University behind Krihyaksha students and research institutions biomechanical training, research and development programs and skill development programs for 10 August 2023 to Dehradun (National Authority and AIPSO Team) signed a mutual cooperation agreement.',
        'With Samista, Dehradun signed a mutual cooperation agreement.',
        'With Ploitkashashhya, Dehradun signed a mutual cooperation agreement.',
        'On 15 March 2024 with Cancer Research and Cancer (Goa),Delhi signed a mutual cooperation agreement.',
        'On 19 March 2024 to CPUS IT, IT Select Institute of Municipal and Assometric Plants (CPUSS ISOSP) signed a mutual cooperation agreement.',
        'On 22 April 2024 with Social Responsibility Ethiopia (ASR Ethiopia) signed a mutual cooperation agreement.',
        'On 24 April 2024 Jayanek Foundation, Dehradun signed a mutual cooperation agreement.',
        'On 1 May 2024 with Soma Dental College and Hospital, Krihyaksha signed a mutual cooperation agreement.',
        'On 11 June 2024 to Uttarakhand Sanskrit Vidyapith, Haridwar signed a mutual cooperation agreement.',
        'On 12 June 2024 to Uttarakhand Ayurved Vidyapith, Dehradun signed a mutual cooperation agreement.',
        'On 24 August 2024 Shree Sumanattarakhand Vidyapith of Svastisss, Dehradun signed a mutual cooperation agreement, where Sumansharam Sharma of dry water is a sacred life of one way.'
      ]
    },
    hi: {
      title: 'एमओयू',
      mainHeading: 'एमओयू - समझौते ज्ञापन',
      description: 'विश्वविद्यालय द्वारा विभिन्न संस्थाओं के किये गये एमओयू का विवरण:',
      mous: [
        'विश्वविद्यालय परिसर क्रिहयक्षा के मेडिकल लेब टेकनोलॉजी छात्रों की 06 महीने की इंटर्नशिप के लिए एस, क्रिहयक्षा के साथ समझौता ज्ञापन पर हस्ताक्षर किये गये।',
        'विज्ञान-जैव प्रौद्योगिकी की बढ़ता देने, बीटेक संपदा अधिकारों के बारे में जागरूकता बढ़ने और अनुसंधान और विकास परियोजनाओं में पारस्परिक कार्य के लिए मुक्त (उत्तरांचल सरकार) के साथ समझौता ज्ञापन पर हस्ताक्षर किये गये।',
        'यूसके(उत्तरांचल सरकार) के साथ समझौता ज्ञापन पर हस्ताक्षर किये गये।',
        '• विश्वविद्यालय परिसर क्रिहयक्षा के छात्रों और अनुसंधान विद्यार्थियों के लिए बायोमेडिकल प्रशिक्षण, अनुसंधान एवं विकास और कौशल विकास कार्यक्रमों के लिए 10 अगस्त 2023 को देहरादून (एनएयूएएपएडी मान्यता प्राप्त और आईपीएसओ टीम) के साथ समझौता ज्ञापन पर हस्ताक्षर किये गये।',
        'संस्था, देहरादून के साथ समझौता ज्ञापन पर हस्ताक्षर किये गये।',
        'प्लॉटिकसशया, देहरादून के साथ समझौता ज्ञापन पर हस्ताक्षर किये गये।',
        '15 मार्च 2024 को कैंसर रिसर्च एंड केयर (तीसीसीसी), नई दिल्ली के साथ समझौता ज्ञापन पर हस्ताक्षर किये गये।',
        '19 मार्च 2024 को सीपीयूएस-आईटी-सिलेक्ट इंस्टिट्यूट ऑफ मेडिसिनल एंड असाइनमेंट प्लांट्स (सीपीयूएस-इससीप) के साथ समझौता ज्ञापन पर हस्ताक्षर किये गये।',
        '22 अप्रैल 2024 को सोशल रिस्पॉन्सिबिलिटी एथिपिया (एएसआर एथिपिया) के साथ एमओयू पर हस्ताक्षर किये गये।',
        '24 अप्रैल 2024 को जयनेक फाउंडेशन, देहरादून के साथ एमओयू पर हस्ताक्षर किये गये।',
        '1 मई 2024 को सोमा डेंटल कॉलेज और अस्पताल, क्रिहयक्षा के साथ समझौता ज्ञापन पर हस्ताक्षर किये गये।',
        '11 जून 2024 को उत्तरांचल संस्कृत विश्वविद्यालय, हरिद्वार के साथ समझौता ज्ञापन पर हस्ताक्षर किये गये।',
        '12 जून 2024 को उत्तरांचल आयुर्वेद विश्वविद्यालय, देहरादून के साथ समझौता ज्ञापन पर हस्ताक्षर किये गये।',
        'दिनांक 24 अगस्त 2024 श्रीदेव सुमन उत्तरांचल विश्वविद्यालय व स्वस्तिस, देहरादून के बीच एमओयू पर हस्ताक्षर किये गये, जहां बुजुर्गों शर्मा बोले पानी की एक बंद मानव जीवन की एक तरा समान'
      ]
    }
  };

  const data = content[language];

  return (
    <div className="moues-page-new">
      <div className="moues-header-new">
        <button className="back-button-new" onClick={onBack}>
          ← {language === 'en' ? 'Back' : 'पीछे'}
        </button>
        <h1 className="moues-title-new">{data.title}</h1>
      </div>

      <div className="moues-content-wrapper-new">
        <div className="moues-box-new">
          <h2 className="moues-main-heading-new">{data.mainHeading}</h2>
          <p className="moues-description-new">{data.description}</p>
          
          <ul className="moues-list-new">
            {data.mous.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MOUs;
