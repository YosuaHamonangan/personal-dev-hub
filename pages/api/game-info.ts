import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  id: string
  url: string
}

var dummyData: Data[] = [
  {
    id: 'dino',
    url: 'https://ydh-game-dino.netlify.app',
  },
  {
    id: 'hockey',
    url: 'https://ydh-game-hockey.netlify.app',
  },
]

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  var data = dummyData.find(({ id }) => id === req.query.id)
  if (data) res.status(200).json(data)
  else res.status(404).end('Not Found')
}
