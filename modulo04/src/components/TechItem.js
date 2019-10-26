import React from 'react';
import PropTypes from 'prop-types';

function TechItem({tech, onDelete }) {
  return (
    <li>
      {tech}
      <button onClick={onDelete} type="button">Remover</button>
    </li>
  );
}

/**
 * Preenche informações por default caso o usuario não preencha nada em determinado
 * paramêtro.
 */
TechItem.defaultProps = {
  tech: 'Oculto',
};

TechItem.propTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
};

export default TechItem;