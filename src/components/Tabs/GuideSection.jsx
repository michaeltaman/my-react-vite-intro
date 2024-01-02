import { guides } from '../../data';
import GuideItem from './Presenter/GuideItem';

export default function GuideSection() {
    return (
        <section>
        <h3>Hello React!</h3>
        <ul>
          {guides.map((way) => (
            <GuideItem  key={Math.random().toString(36)} {...way} />
          ))}
        </ul>
      </section>
    )
}