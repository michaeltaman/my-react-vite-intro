import PropTypes from 'prop-types';

export default function GuideItem({title, description}) {
    //console.log(title, description)
    return (
        <li>
            <p>
                <strong>{title}</strong> {description}
            </p>
        </li>
    )
}

GuideItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};
