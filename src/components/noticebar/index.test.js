import Nerv, { findDOMNode } from 'nervjs'
import { renderToString } from 'nerv-server'
import { Simulate, renderIntoDocument } from 'nerv-test-utils'

import AtNoticebar from '../../../.temp/components/noticebar/index'

describe('AtNoticebar Snap', () => {
  it('render AtNoticebar -- props show', () => {
    const componet = renderToString(<AtNoticebar close>这是内容</AtNoticebar>)
    expect(componet).toMatchSnapshot()
  })

  it('render AtNoticebar -- props single', () => {
    const componet = renderToString(<AtNoticebar single>这是内容</AtNoticebar>)
    expect(componet).toMatchSnapshot()
  })

  it('render AtNoticebar -- props speed', () => {
    const componet = renderToString(<AtNoticebar speed={200}>这是内容</AtNoticebar>)
    expect(componet).toMatchSnapshot()
  })

  it('render AtNoticebar -- props moreText & showMore', () => {
    const componet = renderToString(<AtNoticebar showMore moreText='查看更多'>这是内容</AtNoticebar>)
    expect(componet).toMatchSnapshot()
  })

  it('render AtNoticebar -- props icon', () => {
    const componet = renderToString(<AtNoticebar icon='volume-plus'>这是内容</AtNoticebar>)
    expect(componet).toMatchSnapshot()
  })
})

describe('AtNoticebar Event', () => {
  it('AtNoticebar onClose', () => {
    const onClose = jest.fn()
    const component = renderIntoDocument(<AtNoticebar icon='volume-plus' onClose={onClose} close>这是内容</AtNoticebar>)
    const dom = findDOMNode(component, 'at-noticebar').querySelector('.at-noticebar__close')
    Simulate.click(dom)
    process.nextTick(() => {
      expect(onClose).toBeCalled()
    })
  })

  it('AtNoticebar onGotoMore', () => {
    const onGotoMore = jest.fn()
    const component = renderIntoDocument(<AtNoticebar icon='volume-plus' onGotoMore={onGotoMore} single showMore moreText='更多内容'>这是内容</AtNoticebar>)
    const dom = findDOMNode(component, 'at-noticebar').querySelector('.at-noticebar__more')
    Simulate.click(dom)
    process.nextTick(() => {
      expect(onGotoMore).toBeCalled()
    })
  })
})
