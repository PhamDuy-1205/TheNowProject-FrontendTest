import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'
import { useState } from 'react'

/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */

const Index = () => {
  const tabList = ["All", "Pending", "Completed"]
  const [selectedTab, setSelectedTab] = useState(0)

  const getStatusFilter = () => {
    switch (selectedTab) {
      case 1:
        return 'pending'
      case 2:
        return 'completed'
      default:
        return 'all'
    }
  }

  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>

        <div className='pt-10 flex hover:cursor-pointer'>
          {tabList.map((tab, index) => (
            <div key={index} className={`py-[10px] px-[25px] rounded-[40px] ml-2 border-[1px] border-gray-200 font-[600] ${selectedTab === index ? 'bg-gray-700 text-white' : 'bg-white text-[#334155]'}`} onClick={() => setSelectedTab(index)}>
              {tab}
            </div>
          ))}
        </div>

        <div className="pt-10">
          <TodoList statusFilter={getStatusFilter()} />
        </div>

        <div className="pt-10">
          <CreateTodoForm />
        </div>
      </div>
    </main>
  )
}

export default Index
