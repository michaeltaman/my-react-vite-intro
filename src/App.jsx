import { useState } from 'react';
import Header from './components/Header/Header';
import GuideSection from './components/Tabs/GuideSection';
import DifferencesSection from './components/Tabs/DifferencesSection';
import IntroSection from './components/Tabs/IntroSection';
import TabsSection from './components/TabsSection';
import FeedbackSection from './components/Tabs/Feedback/FeedbackSection';
import EffectSection from './components/Effects/EffectSection';

function App() {

  const [tab, setTab] = useState('feedback');

  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <br />
        <TabsSection active={tab} onChange={(current) => {setTab(current)}} />

        {tab === 'main' && <>
            <GuideSection />
            <DifferencesSection />
          </>
        }

        {tab === 'feedback' && <FeedbackSection />}

        {tab === 'effect' && <EffectSection />}

      </main>
    </>
  );
}

export default App;
