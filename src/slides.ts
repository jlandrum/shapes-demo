const slides = [
  {
    type: 'shape',
    size: [50, 50],
    position: [0.5, 0.5],
    color: 'red',
    shape: 'circle' as const,
    animations: [
      {
        range: [0,1],
        from: {
          position: [0.0, 0.0],
          scale: 0.5,
        },
        to: {
          position: [1, 1],
          scale: 1
        }
      },      
      {
        range: [1,3],
        from: {
          position: [1, 1]
        },
        to: {
          position: [1, 0]
        }
      },
      {
        range: [3,5],
        from: {
          position: [1, 0]
        },
        to: {
          position: [0, 0]
        }
      },
    ]
  },  
  {
    type: 'shape',
    size: [40, 40],
    position: [0.6, 0.5],
    color: '#0000FF55',
    shape: 'circle',
    animations: [
      {
        range: [0,5],
        from: {
          position: [0,0]
        },
        to: {
          position: [1,1]
        }
      }
    ]
  },
  {
    type: 'shape',
    size: [40, 40],
    position: [0.5, 0.5],
    color: '#0000FF55',
    shape: 'rectangle',
    animations: [
      {
        range: [0,5],
        from: {
          position: [0.4,0.6],
          rotation: [0],
          scale: 0.1,
        },
        to: {
          position: [0.6,0.4],
          rotation: [360],
          scale: 1.5,
        }
      }
    ]
  },
]

const animSet = {
  duration: 5,
  slides
}

export default animSet;