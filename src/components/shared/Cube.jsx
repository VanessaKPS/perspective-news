import React from 'react'

const Cube = (props) => {
    const { usage } = props
    const randomColor = [
        'random-color0',
        'random-color1',
        'random-color2',
        'random-color3',
        'random-color4',
        'random-color5',
    ]
    const randomNumber = Math.floor(Math.random() * 6)

    return (
        <div className='cube-wrapper'>
            <div
                className={
                    usage === 'placeholder'
                        ? `right ${randomColor[randomNumber]}`
                        : 'right loading-color'
                }
            ></div>
            <div
                className={
                    usage === 'placeholder'
                        ? `top ${randomColor[randomNumber]}`
                        : 'top loading-color'
                }
            ></div>
            <div
                className={
                    usage === 'placeholder'
                        ? `bottom ${randomColor[randomNumber]}`
                        : 'bottom loading-color'
                }
            ></div>
            <div
                className={
                    usage === 'placeholder'
                        ? `left ${randomColor[randomNumber]}`
                        : 'left loading-color'
                }
            ></div>
            <div
                className={
                    usage === 'placeholder'
                        ? `front ${randomColor[randomNumber]}`
                        : 'front loading-color'
                }
            ></div>
            <div
                className={
                    usage === 'placeholder'
                        ? `back ${randomColor[randomNumber]}`
                        : 'back loading-color'
                }
            ></div>
        </div>
    )
}

export default Cube
