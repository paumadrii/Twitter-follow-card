import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
   {
    userName: 'amadri',
    name: 'Ana Madrigal',
    isFollowing: true
   },
   {
    userName: 'aparedes',
    name: 'Alberto Paredes',
    isFollowing: false
   },
   {
    userName: 'cOrtiz',
    name: 'Carmen Ortiz',
    isFollowing: true
   },
   {
    userName: 'jindex',
    name: 'Json Index',
    isFollowing: false
   }
]
export function App() {
    return (
        <section className='App'>
            {
                users.map(({ userName, name, isFollowing }) => {
                    return (
                        <TwitterFollowCard userName={userName}
                         initialIsFollowing={isFollowing}
                         key={userName}>
                            {name}

                        </TwitterFollowCard>
                    )
                })
            }
      

        </section>


    )
}