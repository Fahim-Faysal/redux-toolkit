import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, printName, fetchUser } from '../../features/counter/counterSlice';
import './Test.css'

const Test = () => {
      const { isLoading, name, users, value } = useSelector(state => state.counter)
      const dispatch = useDispatch()
      useEffect(() => {
            dispatch(fetchUser())
      }, [])

      return (
            <div>
                  <h1>{value}</h1>
                  <h1>{name}</h1>
                  <button onClick={() => dispatch(increment())}>Increment</button>
                  <button onClick={() => dispatch(decrement())} >Decrement</button>
                  <button onClick={() => dispatch(printName())}>Change Name</button>

                  {

                        users.map(user => (

                              <div key={user?.id} style={{ backgroundColor: 'yellow' }}>
                                    <p style={{ color: 'black' }}>{user?.name}</p>
                                    <p style={{ color: 'purple' }}>{user?.email}</p>
                              </div>

                        ))
                  }

            </div>
      );
};

export default Test;