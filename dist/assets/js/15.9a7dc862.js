(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{347:function(_,t,e){"use strict";e.r(t);var a=e(3),o=Object(a.a)({},(function(){var _=this,t=_.$createElement,e=_._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("h1",{attrs:{id:"pool-c"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pool-c"}},[_._v("#")]),_._v(" pool.c")]),_._v(" "),e("p",[_._v("这个文件主要处理的就是矿池这边的逻辑，主要负责产块，奖励分配，矿工的就接入，状态管理，区块管理等工作")]),_._v(" "),e("p",[_._v("一共有六个线程，下面分别介绍一下")]),_._v(" "),e("hr"),_._v(" "),e("h2",{attrs:{id:"_1、pool-net-thread"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、pool-net-thread"}},[_._v("#")]),_._v(" 1、pool_net_thread")]),_._v(" "),e("p",[_._v("这个线程主要是用于监听连接")]),_._v(" "),e("p",[_._v("当同步的时候，不断的监听服务器端口，当有连接到来的时候，执行connect_can_be_accepted（）函数，判断地址是否合法，不合法就要断开对其的连接，不允许起加入。")]),_._v(" "),e("p",[_._v("当判断可以接收的时候，就会记录对应的消息到一个connection_list_element的结构体中，把连接时间和上一次发送任务的时间记录为当前时间")]),_._v(" "),e("p",[_._v("并且把这个结构体加入到g_accept_connection_list_head这个链表中，等待被pool_main_thread这个线程读取")]),_._v(" "),e("hr"),_._v(" "),e("h2",{attrs:{id:"_2、pool-main-thread"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、pool-main-thread"}},[_._v("#")]),_._v(" 2、pool_main_thread")]),_._v(" "),e("p",[_._v("矿池的主线程")]),_._v(" "),e("p",[_._v("这个线程再同步状态的时候，会一直循环的遍历一个全局变量g_accept_connection_list_head，这个变量实际上是一个链表，里面放着所有的被接受的外部客户端连接。不断的把连接从这个变量中取出，放到g_connection_list_head这个链表里面。 这个变量才是我们实际上矿池会管理和维护的有效连接。")]),_._v(" "),e("p",[_._v("处理完之后，矿池就开始遍历循环检查g_connection_list_head 这个链表里面的连接，检查连接标志位，判断当前的连接状态，若主动被删除（也就是elt->connection_data.deleted 不为空），或者状态为POLLNVAL,POLLHUP,POLLERR,就会执行close_connection 这个函数断开连接。")]),_._v(" "),e("p",[_._v("若检测到的状态为POLLIN，表示当前这个连接有数据要写入，执行receive_data_from_connection这个函数；")]),_._v(" "),e("p",[_._v("若检测到的状态为POLLOUT，表示矿池有将要发送给这个连接的数据，需要写出数据，执行send_data_to_connection这个函数。")]),_._v(" "),e("p",[_._v("其实在这里你就可以把每一个connection都理解为是一个矿工，in对应的状态就是接收到矿工发送来的数据，out对应的就是要发送数据给矿工")]),_._v(" "),e("hr"),_._v(" "),e("h2",{attrs:{id:"_3、pool-block-thread"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、pool-block-thread"}},[_._v("#")]),_._v(" 3、pool_block_thread")]),_._v(" "),e("p",[_._v("矿池处理区块的主线程，负责存储区块和广播")]),_._v(" "),e("p",[_._v("再同步状态下，这个线程主要的任务就是从block_queue 这个队列中获取到第一个区块，执行xdag_add_block（） 把这个区块存储到本地，存储成功之后，再执行xdag_send_new_block（）利用dnet网络发送给其他的矿池，进行一个全网的广播。")]),_._v(" "),e("hr"),_._v(" "),e("h2",{attrs:{id:"_4、pool-remove-inactive-connections"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4、pool-remove-inactive-connections"}},[_._v("#")]),_._v(" 4、pool_remove_inactive_connections")]),_._v(" "),e("p",[_._v("移除不活跃连接的线程")]),_._v(" "),e("p",[_._v("这个线程不管同步不同步，都会一直在运行 循环遍历本地的g_connection_list_head，对他的last_share_time字段进行检测，如果上一次更新的时间超过了300s，就会把这个连接断开，每分钟执行一次")]),_._v(" "),e("hr"),_._v(" "),e("h2",{attrs:{id:"_5、pool-payment-thread"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5、pool-payment-thread"}},[_._v("#")]),_._v(" 5、pool_payment_thread")]),_._v(" "),e("p",[_._v("主要是负责发放奖励方面的")]),_._v(" "),e("hr"),_._v(" "),e("h2",{attrs:{id:"_6、general-mining-thread"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6、general-mining-thread"}},[_._v("#")]),_._v(" 6、general_mining_thread")]),_._v(" "),e("p",[_._v("区块产生的线程，每64s生成一个块")]),_._v(" "),e("p",[_._v("g_block_production_on 和 g_stop_general_mining 这两个全局标志位控制这个线程是否生成区块")]),_._v(" "),e("p",[_._v("主要执行的是xdag_create_and_send_block（） 【这个函数再block.c里面讲】这个函数生成区块")]),_._v(" "),e("p",[_._v("但是这里生成的区块实际上就是没有任何矿工的情况下才会进行的把（个人是这么感觉）")]),_._v(" "),e("hr"),_._v(" "),e("h2",{attrs:{id:"_7、一些函数的解释"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7、一些函数的解释"}},[_._v("#")]),_._v(" 7、一些函数的解释")]),_._v(" "),e("hr"),_._v(" "),e("h3",{attrs:{id:"（1）xdag-initialize-pool"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#（1）xdag-initialize-pool"}},[_._v("#")]),_._v(" （1）xdag_initialize_pool()")]),_._v(" "),e("p",[_._v("这个函数主要是矿池启动的时候会执行，主要的目的就是初始化矿池的一些状态。")]),_._v(" "),e("p",[_._v("初始化矿池和基金会地址的空间，根据自己的miner.id.data获取到自己的地址块，设置对应的矿工状态为 MINER_SERVER，因为这里矿池是会维护一个自己的矿工g_pool_miner，然后就是开启上述讲的六个线程。")]),_._v(" "),e("hr"),_._v(" "),e("h3",{attrs:{id:"（2）open-pool-connection"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#（2）open-pool-connection"}},[_._v("#")]),_._v(" （2）open_pool_connection()")]),_._v(" "),e("p",[_._v("这个函数实际上就是为本地矿池打开一个socket充当一个服务器端口，并且为其设置对应的属性。并且把开启客户端时候所设置的矿池参数传送给xdag_pool_set_config 这个函数.")]),_._v(" "),e("p",[_._v("最后这个函数返回的是一个sock套接字标志位，代表的就是这个套接字")]),_._v(" "),e("hr"),_._v(" "),e("h3",{attrs:{id:"_3-xdag-pool-set-config"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-xdag-pool-set-config"}},[_._v("#")]),_._v(" (3)xdag_pool_set_config()")]),_._v(" "),e("p",[_._v("根据传送进来的参数设置矿池的参数，比如允许接入的矿工数等等 具体参考xdag help 的说明")]),_._v(" "),e("hr"),_._v(" "),e("h3",{attrs:{id:"_4-connection-can-be-accepted"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-connection-can-be-accepted"}},[_._v("#")]),_._v(" (4)connection_can_be_accepted()")]),_._v(" "),e("p",[_._v("判断一个连接是否是被允许的，也就是是否允许一个矿工加入")]),_._v(" "),e("p",[_._v("1.首先判断是否超过矿池最大的允许矿工接入数")]),_._v(" "),e("p",[_._v("g_connections_count >= g_max_connections_count")]),_._v(" "),e("p",[_._v("2.如果不超过，判断这个矿工的ip地址是否超过了最大的允许连接数")]),_._v(" "),e("hr"),_._v(" "),e("h3",{attrs:{id:"（5）block-queue-append-new"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#（5）block-queue-append-new"}},[_._v("#")]),_._v(" （5）block_queue_append_new()")]),_._v(" "),e("p",[_._v("客户端全局会")]),_._v(" "),e("hr"),_._v(" "),e("h2",{attrs:{id:"_8、一些变量的注释"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8、一些变量的注释"}},[_._v("#")]),_._v(" 8、一些变量的注释")]),_._v(" "),e("p",[_._v("1、g_max_connections_count  :这个代表的就是当前矿池允许的最大矿工接如数量，默认的是256（看定义应该是，不确定这里有没有理解错），最大时允许8192个矿工接入")]),_._v(" "),e("p",[_._v("2、g_max_miner_ip_count：这个应该是每一个矿工，也就是一个ip地址最多可以发起几个连接到矿池,最小是1，最大是8")]),_._v(" "),e("p",[_._v("3、g_connections_per_miner_limit ： 同一个地址的矿工最多允许最多开出多少个客户端")]),_._v(" "),e("p",[_._v("【g_max_miner_ip_count 和 g_connections_per_miner_limit 这两个的区别就在于一个是根据ip地址来判断的，一个是最多允许同一个ip地址发起的连接数，另一个是矿工的地址，这个地址同时可以发起的连接数，因为同一个矿工，可能使用多个ip地址发起连接，所以这里是对他们做出了限制】")])])}),[],!1,null,null,null);t.default=o.exports}}]);