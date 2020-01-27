import React from 'react';

function OneMainList({ title, mainHref, many, img, sub }) {
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
                                                        <a href={`${v.link}.html`}>{v.title}</a>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </li>
                                :sub[index].list === 0
                                ?<li key={index}>
                                    <a href={`${sub[index].mainLink}.html`}>{sub[index].sub0}</a>
                                </li>
                                : null
                            )
                        })
                    }
                </ul>
            }
        </li>
        :<li>
            <a href={`${mainHref}.html`} >
                <img src={img} alt={mainHref} />
                <span>{title}</span>
            </a>
        </li>
    );
}

export default OneMainList;
