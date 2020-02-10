import React from 'react';

function OneMainList({ title, mainHref, many, img, sub, onItemClick }) {
  return (
    many === true
        ?<li> 
            <a href={`#${mainHref}`} data-toggle="collapse" aria-expanded="false" className="dropdown-toggle collapsed">
                <img src={img} alt={mainHref}/>
                <span>{title}</span>
            </a> 
            {
                <ul className="collapse list-unstyled" id={mainHref}>
                    {
                        sub.map((value, index) => {
                            return (
                                sub[index].list === 1
                                ?<li key={index}>
                                    <a data-toggle="collapse" aria-expanded="false" className="dropdown-toggle" href={`#${sub[index].mainLink}`}>{value.sub0}</a>
                                    <ul className="collapse list-unstyled" id={sub[index].mainLink}>
                                        {
                                            value.subList.map((v, i) => {
                                                return (
                                                    <li key={i}>
                                                        <button className="btn" onClick={() => onItemClick(`${v.link}`)}>{v.title}</button>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </li>
                                :sub[index].list === 0
                                ?<li key={index}>
                                    <button className="btn" onClick={() => onItemClick(`${sub[index].mainLink}`)}>{sub[index].sub0}</button>
                                </li>
                                : null
                            )
                        })
                    }
                </ul>
            }
        </li>
        :<li>
            <button className="btn" onClick={() => onItemClick(`${mainHref}`)} >
                <img src={img} alt={mainHref} />
                <span>{title}</span>
            </button>
        </li>
    );
}

export default OneMainList;
