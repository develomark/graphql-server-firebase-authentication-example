import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    places: <T = Place[]>(args: { where?: PlaceWhereInput, orderBy?: PlaceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    pricings: <T = Pricing[]>(args: { where?: PricingWhereInput, orderBy?: PricingOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    guestRequirementses: <T = GuestRequirements[]>(args: { where?: GuestRequirementsWhereInput, orderBy?: GuestRequirementsOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    policieses: <T = Policies[]>(args: { where?: PoliciesWhereInput, orderBy?: PoliciesOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    houseRuleses: <T = HouseRules[]>(args: { where?: HouseRulesWhereInput, orderBy?: HouseRulesOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    viewses: <T = Views[]>(args: { where?: ViewsWhereInput, orderBy?: ViewsOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    locations: <T = Location[]>(args: { where?: LocationWhereInput, orderBy?: LocationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    neighbourhoods: <T = Neighbourhood[]>(args: { where?: NeighbourhoodWhereInput, orderBy?: NeighbourhoodOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    cities: <T = City[]>(args: { where?: CityWhereInput, orderBy?: CityOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    pictures: <T = Picture[]>(args: { where?: PictureWhereInput, orderBy?: PictureOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    experiences: <T = Experience[]>(args: { where?: ExperienceWhereInput, orderBy?: ExperienceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    experienceCategories: <T = ExperienceCategory[]>(args: { where?: ExperienceCategoryWhereInput, orderBy?: ExperienceCategoryOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    amenitieses: <T = Amenities[]>(args: { where?: AmenitiesWhereInput, orderBy?: AmenitiesOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    reviews: <T = Review[]>(args: { where?: ReviewWhereInput, orderBy?: ReviewOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    bookings: <T = Booking[]>(args: { where?: BookingWhereInput, orderBy?: BookingOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    payments: <T = Payment[]>(args: { where?: PaymentWhereInput, orderBy?: PaymentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    paymentAccounts: <T = PaymentAccount[]>(args: { where?: PaymentAccountWhereInput, orderBy?: PaymentAccountOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    paypalInformations: <T = PaypalInformation[]>(args: { where?: PaypalInformationWhereInput, orderBy?: PaypalInformationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    creditCardInformations: <T = CreditCardInformation[]>(args: { where?: CreditCardInformationWhereInput, orderBy?: CreditCardInformationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    messages: <T = Message[]>(args: { where?: MessageWhereInput, orderBy?: MessageOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    notifications: <T = Notification[]>(args: { where?: NotificationWhereInput, orderBy?: NotificationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    restaurants: <T = Restaurant[]>(args: { where?: RestaurantWhereInput, orderBy?: RestaurantOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    place: <T = Place | null>(args: { where: PlaceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    pricing: <T = Pricing | null>(args: { where: PricingWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    guestRequirements: <T = GuestRequirements | null>(args: { where: GuestRequirementsWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    policies: <T = Policies | null>(args: { where: PoliciesWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    houseRules: <T = HouseRules | null>(args: { where: HouseRulesWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    views: <T = Views | null>(args: { where: ViewsWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    location: <T = Location | null>(args: { where: LocationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    neighbourhood: <T = Neighbourhood | null>(args: { where: NeighbourhoodWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    city: <T = City | null>(args: { where: CityWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    experience: <T = Experience | null>(args: { where: ExperienceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    experienceCategory: <T = ExperienceCategory | null>(args: { where: ExperienceCategoryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    amenities: <T = Amenities | null>(args: { where: AmenitiesWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    review: <T = Review | null>(args: { where: ReviewWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    booking: <T = Booking | null>(args: { where: BookingWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    payment: <T = Payment | null>(args: { where: PaymentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    paymentAccount: <T = PaymentAccount | null>(args: { where: PaymentAccountWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    paypalInformation: <T = PaypalInformation | null>(args: { where: PaypalInformationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    creditCardInformation: <T = CreditCardInformation | null>(args: { where: CreditCardInformationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    message: <T = Message | null>(args: { where: MessageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    notification: <T = Notification | null>(args: { where: NotificationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    restaurant: <T = Restaurant | null>(args: { where: RestaurantWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    placesConnection: <T = PlaceConnection>(args: { where?: PlaceWhereInput, orderBy?: PlaceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    pricingsConnection: <T = PricingConnection>(args: { where?: PricingWhereInput, orderBy?: PricingOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    guestRequirementsesConnection: <T = GuestRequirementsConnection>(args: { where?: GuestRequirementsWhereInput, orderBy?: GuestRequirementsOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    policiesesConnection: <T = PoliciesConnection>(args: { where?: PoliciesWhereInput, orderBy?: PoliciesOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    houseRulesesConnection: <T = HouseRulesConnection>(args: { where?: HouseRulesWhereInput, orderBy?: HouseRulesOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    viewsesConnection: <T = ViewsConnection>(args: { where?: ViewsWhereInput, orderBy?: ViewsOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    locationsConnection: <T = LocationConnection>(args: { where?: LocationWhereInput, orderBy?: LocationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    neighbourhoodsConnection: <T = NeighbourhoodConnection>(args: { where?: NeighbourhoodWhereInput, orderBy?: NeighbourhoodOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    citiesConnection: <T = CityConnection>(args: { where?: CityWhereInput, orderBy?: CityOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    picturesConnection: <T = PictureConnection>(args: { where?: PictureWhereInput, orderBy?: PictureOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    experiencesConnection: <T = ExperienceConnection>(args: { where?: ExperienceWhereInput, orderBy?: ExperienceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    experienceCategoriesConnection: <T = ExperienceCategoryConnection>(args: { where?: ExperienceCategoryWhereInput, orderBy?: ExperienceCategoryOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    amenitiesesConnection: <T = AmenitiesConnection>(args: { where?: AmenitiesWhereInput, orderBy?: AmenitiesOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    reviewsConnection: <T = ReviewConnection>(args: { where?: ReviewWhereInput, orderBy?: ReviewOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    bookingsConnection: <T = BookingConnection>(args: { where?: BookingWhereInput, orderBy?: BookingOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    paymentsConnection: <T = PaymentConnection>(args: { where?: PaymentWhereInput, orderBy?: PaymentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    paymentAccountsConnection: <T = PaymentAccountConnection>(args: { where?: PaymentAccountWhereInput, orderBy?: PaymentAccountOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    paypalInformationsConnection: <T = PaypalInformationConnection>(args: { where?: PaypalInformationWhereInput, orderBy?: PaypalInformationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    creditCardInformationsConnection: <T = CreditCardInformationConnection>(args: { where?: CreditCardInformationWhereInput, orderBy?: CreditCardInformationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    messagesConnection: <T = MessageConnection>(args: { where?: MessageWhereInput, orderBy?: MessageOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    notificationsConnection: <T = NotificationConnection>(args: { where?: NotificationWhereInput, orderBy?: NotificationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    restaurantsConnection: <T = RestaurantConnection>(args: { where?: RestaurantWhereInput, orderBy?: RestaurantOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPlace: <T = Place>(args: { data: PlaceCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPricing: <T = Pricing>(args: { data: PricingCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createGuestRequirements: <T = GuestRequirements>(args: { data: GuestRequirementsCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPolicies: <T = Policies>(args: { data: PoliciesCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createHouseRules: <T = HouseRules>(args: { data: HouseRulesCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createViews: <T = Views>(args: { data: ViewsCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createLocation: <T = Location>(args: { data: LocationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createNeighbourhood: <T = Neighbourhood>(args: { data: NeighbourhoodCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createCity: <T = City>(args: { data: CityCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPicture: <T = Picture>(args: { data: PictureCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createExperience: <T = Experience>(args: { data: ExperienceCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createExperienceCategory: <T = ExperienceCategory>(args: { data: ExperienceCategoryCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createAmenities: <T = Amenities>(args: { data: AmenitiesCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createReview: <T = Review>(args: { data: ReviewCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createBooking: <T = Booking>(args: { data: BookingCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPayment: <T = Payment>(args: { data: PaymentCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPaymentAccount: <T = PaymentAccount>(args: { data: PaymentAccountCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPaypalInformation: <T = PaypalInformation>(args: { data: PaypalInformationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createCreditCardInformation: <T = CreditCardInformation>(args: { data: CreditCardInformationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createMessage: <T = Message>(args: { data: MessageCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createNotification: <T = Notification>(args: { data: NotificationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createRestaurant: <T = Restaurant>(args: { data: RestaurantCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updatePlace: <T = Place | null>(args: { data: PlaceUpdateInput, where: PlaceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updatePricing: <T = Pricing | null>(args: { data: PricingUpdateInput, where: PricingWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateGuestRequirements: <T = GuestRequirements | null>(args: { data: GuestRequirementsUpdateInput, where: GuestRequirementsWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updatePolicies: <T = Policies | null>(args: { data: PoliciesUpdateInput, where: PoliciesWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateHouseRules: <T = HouseRules | null>(args: { data: HouseRulesUpdateInput, where: HouseRulesWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateViews: <T = Views | null>(args: { data: ViewsUpdateInput, where: ViewsWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateLocation: <T = Location | null>(args: { data: LocationUpdateInput, where: LocationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateNeighbourhood: <T = Neighbourhood | null>(args: { data: NeighbourhoodUpdateInput, where: NeighbourhoodWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateCity: <T = City | null>(args: { data: CityUpdateInput, where: CityWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateExperience: <T = Experience | null>(args: { data: ExperienceUpdateInput, where: ExperienceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateExperienceCategory: <T = ExperienceCategory | null>(args: { data: ExperienceCategoryUpdateInput, where: ExperienceCategoryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateAmenities: <T = Amenities | null>(args: { data: AmenitiesUpdateInput, where: AmenitiesWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateReview: <T = Review | null>(args: { data: ReviewUpdateInput, where: ReviewWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateBooking: <T = Booking | null>(args: { data: BookingUpdateInput, where: BookingWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updatePayment: <T = Payment | null>(args: { data: PaymentUpdateInput, where: PaymentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updatePaymentAccount: <T = PaymentAccount | null>(args: { data: PaymentAccountUpdateInput, where: PaymentAccountWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updatePaypalInformation: <T = PaypalInformation | null>(args: { data: PaypalInformationUpdateInput, where: PaypalInformationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateCreditCardInformation: <T = CreditCardInformation | null>(args: { data: CreditCardInformationUpdateInput, where: CreditCardInformationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateMessage: <T = Message | null>(args: { data: MessageUpdateInput, where: MessageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateNotification: <T = Notification | null>(args: { data: NotificationUpdateInput, where: NotificationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateRestaurant: <T = Restaurant | null>(args: { data: RestaurantUpdateInput, where: RestaurantWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deletePlace: <T = Place | null>(args: { where: PlaceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deletePricing: <T = Pricing | null>(args: { where: PricingWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteGuestRequirements: <T = GuestRequirements | null>(args: { where: GuestRequirementsWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deletePolicies: <T = Policies | null>(args: { where: PoliciesWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteHouseRules: <T = HouseRules | null>(args: { where: HouseRulesWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteViews: <T = Views | null>(args: { where: ViewsWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteLocation: <T = Location | null>(args: { where: LocationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteNeighbourhood: <T = Neighbourhood | null>(args: { where: NeighbourhoodWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteCity: <T = City | null>(args: { where: CityWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteExperience: <T = Experience | null>(args: { where: ExperienceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteExperienceCategory: <T = ExperienceCategory | null>(args: { where: ExperienceCategoryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteAmenities: <T = Amenities | null>(args: { where: AmenitiesWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteReview: <T = Review | null>(args: { where: ReviewWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteBooking: <T = Booking | null>(args: { where: BookingWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deletePayment: <T = Payment | null>(args: { where: PaymentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deletePaymentAccount: <T = PaymentAccount | null>(args: { where: PaymentAccountWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deletePaypalInformation: <T = PaypalInformation | null>(args: { where: PaypalInformationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteCreditCardInformation: <T = CreditCardInformation | null>(args: { where: CreditCardInformationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteMessage: <T = Message | null>(args: { where: MessageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteNotification: <T = Notification | null>(args: { where: NotificationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteRestaurant: <T = Restaurant | null>(args: { where: RestaurantWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPlace: <T = Place>(args: { where: PlaceWhereUniqueInput, create: PlaceCreateInput, update: PlaceUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPricing: <T = Pricing>(args: { where: PricingWhereUniqueInput, create: PricingCreateInput, update: PricingUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertGuestRequirements: <T = GuestRequirements>(args: { where: GuestRequirementsWhereUniqueInput, create: GuestRequirementsCreateInput, update: GuestRequirementsUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPolicies: <T = Policies>(args: { where: PoliciesWhereUniqueInput, create: PoliciesCreateInput, update: PoliciesUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertHouseRules: <T = HouseRules>(args: { where: HouseRulesWhereUniqueInput, create: HouseRulesCreateInput, update: HouseRulesUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertViews: <T = Views>(args: { where: ViewsWhereUniqueInput, create: ViewsCreateInput, update: ViewsUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertLocation: <T = Location>(args: { where: LocationWhereUniqueInput, create: LocationCreateInput, update: LocationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertNeighbourhood: <T = Neighbourhood>(args: { where: NeighbourhoodWhereUniqueInput, create: NeighbourhoodCreateInput, update: NeighbourhoodUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertCity: <T = City>(args: { where: CityWhereUniqueInput, create: CityCreateInput, update: CityUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertExperience: <T = Experience>(args: { where: ExperienceWhereUniqueInput, create: ExperienceCreateInput, update: ExperienceUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertExperienceCategory: <T = ExperienceCategory>(args: { where: ExperienceCategoryWhereUniqueInput, create: ExperienceCategoryCreateInput, update: ExperienceCategoryUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertAmenities: <T = Amenities>(args: { where: AmenitiesWhereUniqueInput, create: AmenitiesCreateInput, update: AmenitiesUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertReview: <T = Review>(args: { where: ReviewWhereUniqueInput, create: ReviewCreateInput, update: ReviewUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertBooking: <T = Booking>(args: { where: BookingWhereUniqueInput, create: BookingCreateInput, update: BookingUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPayment: <T = Payment>(args: { where: PaymentWhereUniqueInput, create: PaymentCreateInput, update: PaymentUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPaymentAccount: <T = PaymentAccount>(args: { where: PaymentAccountWhereUniqueInput, create: PaymentAccountCreateInput, update: PaymentAccountUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPaypalInformation: <T = PaypalInformation>(args: { where: PaypalInformationWhereUniqueInput, create: PaypalInformationCreateInput, update: PaypalInformationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertCreditCardInformation: <T = CreditCardInformation>(args: { where: CreditCardInformationWhereUniqueInput, create: CreditCardInformationCreateInput, update: CreditCardInformationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertMessage: <T = Message>(args: { where: MessageWhereUniqueInput, create: MessageCreateInput, update: MessageUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertNotification: <T = Notification>(args: { where: NotificationWhereUniqueInput, create: NotificationCreateInput, update: NotificationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertRestaurant: <T = Restaurant>(args: { where: RestaurantWhereUniqueInput, create: RestaurantCreateInput, update: RestaurantUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPlaces: <T = BatchPayload>(args: { data: PlaceUpdateInput, where?: PlaceWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPricings: <T = BatchPayload>(args: { data: PricingUpdateInput, where?: PricingWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyGuestRequirementses: <T = BatchPayload>(args: { data: GuestRequirementsUpdateInput, where?: GuestRequirementsWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPolicieses: <T = BatchPayload>(args: { data: PoliciesUpdateInput, where?: PoliciesWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyHouseRuleses: <T = BatchPayload>(args: { data: HouseRulesUpdateInput, where?: HouseRulesWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyViewses: <T = BatchPayload>(args: { data: ViewsUpdateInput, where?: ViewsWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyLocations: <T = BatchPayload>(args: { data: LocationUpdateInput, where?: LocationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyNeighbourhoods: <T = BatchPayload>(args: { data: NeighbourhoodUpdateInput, where?: NeighbourhoodWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyCities: <T = BatchPayload>(args: { data: CityUpdateInput, where?: CityWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPictures: <T = BatchPayload>(args: { data: PictureUpdateInput, where?: PictureWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyExperiences: <T = BatchPayload>(args: { data: ExperienceUpdateInput, where?: ExperienceWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyExperienceCategories: <T = BatchPayload>(args: { data: ExperienceCategoryUpdateInput, where?: ExperienceCategoryWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyAmenitieses: <T = BatchPayload>(args: { data: AmenitiesUpdateInput, where?: AmenitiesWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyReviews: <T = BatchPayload>(args: { data: ReviewUpdateInput, where?: ReviewWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyBookings: <T = BatchPayload>(args: { data: BookingUpdateInput, where?: BookingWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPayments: <T = BatchPayload>(args: { data: PaymentUpdateInput, where?: PaymentWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPaymentAccounts: <T = BatchPayload>(args: { data: PaymentAccountUpdateInput, where?: PaymentAccountWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPaypalInformations: <T = BatchPayload>(args: { data: PaypalInformationUpdateInput, where?: PaypalInformationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyCreditCardInformations: <T = BatchPayload>(args: { data: CreditCardInformationUpdateInput, where?: CreditCardInformationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyMessages: <T = BatchPayload>(args: { data: MessageUpdateInput, where?: MessageWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyNotifications: <T = BatchPayload>(args: { data: NotificationUpdateInput, where?: NotificationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyRestaurants: <T = BatchPayload>(args: { data: RestaurantUpdateInput, where?: RestaurantWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPlaces: <T = BatchPayload>(args: { where?: PlaceWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPricings: <T = BatchPayload>(args: { where?: PricingWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyGuestRequirementses: <T = BatchPayload>(args: { where?: GuestRequirementsWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPolicieses: <T = BatchPayload>(args: { where?: PoliciesWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyHouseRuleses: <T = BatchPayload>(args: { where?: HouseRulesWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyViewses: <T = BatchPayload>(args: { where?: ViewsWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyLocations: <T = BatchPayload>(args: { where?: LocationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyNeighbourhoods: <T = BatchPayload>(args: { where?: NeighbourhoodWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyCities: <T = BatchPayload>(args: { where?: CityWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPictures: <T = BatchPayload>(args: { where?: PictureWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyExperiences: <T = BatchPayload>(args: { where?: ExperienceWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyExperienceCategories: <T = BatchPayload>(args: { where?: ExperienceCategoryWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyAmenitieses: <T = BatchPayload>(args: { where?: AmenitiesWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyReviews: <T = BatchPayload>(args: { where?: ReviewWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyBookings: <T = BatchPayload>(args: { where?: BookingWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPayments: <T = BatchPayload>(args: { where?: PaymentWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPaymentAccounts: <T = BatchPayload>(args: { where?: PaymentAccountWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPaypalInformations: <T = BatchPayload>(args: { where?: PaypalInformationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyCreditCardInformations: <T = BatchPayload>(args: { where?: CreditCardInformationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyMessages: <T = BatchPayload>(args: { where?: MessageWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyNotifications: <T = BatchPayload>(args: { where?: NotificationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyRestaurants: <T = BatchPayload>(args: { where?: RestaurantWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    place: <T = PlaceSubscriptionPayload | null>(args: { where?: PlaceSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    pricing: <T = PricingSubscriptionPayload | null>(args: { where?: PricingSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    guestRequirements: <T = GuestRequirementsSubscriptionPayload | null>(args: { where?: GuestRequirementsSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    policies: <T = PoliciesSubscriptionPayload | null>(args: { where?: PoliciesSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    houseRules: <T = HouseRulesSubscriptionPayload | null>(args: { where?: HouseRulesSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    views: <T = ViewsSubscriptionPayload | null>(args: { where?: ViewsSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    location: <T = LocationSubscriptionPayload | null>(args: { where?: LocationSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    neighbourhood: <T = NeighbourhoodSubscriptionPayload | null>(args: { where?: NeighbourhoodSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    city: <T = CitySubscriptionPayload | null>(args: { where?: CitySubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    picture: <T = PictureSubscriptionPayload | null>(args: { where?: PictureSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    experience: <T = ExperienceSubscriptionPayload | null>(args: { where?: ExperienceSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    experienceCategory: <T = ExperienceCategorySubscriptionPayload | null>(args: { where?: ExperienceCategorySubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    amenities: <T = AmenitiesSubscriptionPayload | null>(args: { where?: AmenitiesSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    review: <T = ReviewSubscriptionPayload | null>(args: { where?: ReviewSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    booking: <T = BookingSubscriptionPayload | null>(args: { where?: BookingSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    payment: <T = PaymentSubscriptionPayload | null>(args: { where?: PaymentSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    paymentAccount: <T = PaymentAccountSubscriptionPayload | null>(args: { where?: PaymentAccountSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    paypalInformation: <T = PaypalInformationSubscriptionPayload | null>(args: { where?: PaypalInformationSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    creditCardInformation: <T = CreditCardInformationSubscriptionPayload | null>(args: { where?: CreditCardInformationSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    message: <T = MessageSubscriptionPayload | null>(args: { where?: MessageSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    notification: <T = NotificationSubscriptionPayload | null>(args: { where?: NotificationSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    restaurant: <T = RestaurantSubscriptionPayload | null>(args: { where?: RestaurantSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  User: (where?: UserWhereInput) => Promise<boolean>
  Place: (where?: PlaceWhereInput) => Promise<boolean>
  Pricing: (where?: PricingWhereInput) => Promise<boolean>
  GuestRequirements: (where?: GuestRequirementsWhereInput) => Promise<boolean>
  Policies: (where?: PoliciesWhereInput) => Promise<boolean>
  HouseRules: (where?: HouseRulesWhereInput) => Promise<boolean>
  Views: (where?: ViewsWhereInput) => Promise<boolean>
  Location: (where?: LocationWhereInput) => Promise<boolean>
  Neighbourhood: (where?: NeighbourhoodWhereInput) => Promise<boolean>
  City: (where?: CityWhereInput) => Promise<boolean>
  Picture: (where?: PictureWhereInput) => Promise<boolean>
  Experience: (where?: ExperienceWhereInput) => Promise<boolean>
  ExperienceCategory: (where?: ExperienceCategoryWhereInput) => Promise<boolean>
  Amenities: (where?: AmenitiesWhereInput) => Promise<boolean>
  Review: (where?: ReviewWhereInput) => Promise<boolean>
  Booking: (where?: BookingWhereInput) => Promise<boolean>
  Payment: (where?: PaymentWhereInput) => Promise<boolean>
  PaymentAccount: (where?: PaymentAccountWhereInput) => Promise<boolean>
  PaypalInformation: (where?: PaypalInformationWhereInput) => Promise<boolean>
  CreditCardInformation: (where?: CreditCardInformationWhereInput) => Promise<boolean>
  Message: (where?: MessageWhereInput) => Promise<boolean>
  Notification: (where?: NotificationWhereInput) => Promise<boolean>
  Restaurant: (where?: RestaurantWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateAmenities {
  count: Int!
}

type AggregateBooking {
  count: Int!
}

type AggregateCity {
  count: Int!
}

type AggregateCreditCardInformation {
  count: Int!
}

type AggregateExperience {
  count: Int!
}

type AggregateExperienceCategory {
  count: Int!
}

type AggregateGuestRequirements {
  count: Int!
}

type AggregateHouseRules {
  count: Int!
}

type AggregateLocation {
  count: Int!
}

type AggregateMessage {
  count: Int!
}

type AggregateNeighbourhood {
  count: Int!
}

type AggregateNotification {
  count: Int!
}

type AggregatePayment {
  count: Int!
}

type AggregatePaymentAccount {
  count: Int!
}

type AggregatePaypalInformation {
  count: Int!
}

type AggregatePicture {
  count: Int!
}

type AggregatePlace {
  count: Int!
}

type AggregatePolicies {
  count: Int!
}

type AggregatePricing {
  count: Int!
}

type AggregateRestaurant {
  count: Int!
}

type AggregateReview {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateViews {
  count: Int!
}

type Amenities implements Node {
  id: ID!
  place(where: PlaceWhereInput): Place!
  elevator: Boolean!
  petsAllowed: Boolean!
  internet: Boolean!
  kitchen: Boolean!
  wirelessInternet: Boolean!
  familyKidFriendly: Boolean!
  freeParkingOnPremises: Boolean!
  hotTub: Boolean!
  pool: Boolean!
  smokingAllowed: Boolean!
  wheelchairAccessible: Boolean!
  breakfast: Boolean!
  cableTv: Boolean!
  suitableForEvents: Boolean!
  dryer: Boolean!
  washer: Boolean!
  indoorFireplace: Boolean!
  tv: Boolean!
  heating: Boolean!
  hangers: Boolean!
  iron: Boolean!
  hairDryer: Boolean!
  doorman: Boolean!
  paidParkingOffPremises: Boolean!
  freeParkingOnStreet: Boolean!
  gym: Boolean!
  airConditioning: Boolean!
  shampoo: Boolean!
  essentials: Boolean!
  laptopFriendlyWorkspace: Boolean!
  privateEntrance: Boolean!
  buzzerWirelessIntercom: Boolean!
  babyBath: Boolean!
  babyMonitor: Boolean!
  babysitterRecommendations: Boolean!
  bathtub: Boolean!
  changingTable: Boolean!
  childrensBooksAndToys: Boolean!
  childrensDinnerware: Boolean!
  crib: Boolean!
}

"""A connection to a list of items."""
type AmenitiesConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [AmenitiesEdge]!
  aggregate: AggregateAmenities!
}

input AmenitiesCreateInput {
  elevator: Boolean
  petsAllowed: Boolean
  internet: Boolean
  kitchen: Boolean
  wirelessInternet: Boolean
  familyKidFriendly: Boolean
  freeParkingOnPremises: Boolean
  hotTub: Boolean
  pool: Boolean
  smokingAllowed: Boolean
  wheelchairAccessible: Boolean
  breakfast: Boolean
  cableTv: Boolean
  suitableForEvents: Boolean
  dryer: Boolean
  washer: Boolean
  indoorFireplace: Boolean
  tv: Boolean
  heating: Boolean
  hangers: Boolean
  iron: Boolean
  hairDryer: Boolean
  doorman: Boolean
  paidParkingOffPremises: Boolean
  freeParkingOnStreet: Boolean
  gym: Boolean
  airConditioning: Boolean
  shampoo: Boolean
  essentials: Boolean
  laptopFriendlyWorkspace: Boolean
  privateEntrance: Boolean
  buzzerWirelessIntercom: Boolean
  babyBath: Boolean
  babyMonitor: Boolean
  babysitterRecommendations: Boolean
  bathtub: Boolean
  changingTable: Boolean
  childrensBooksAndToys: Boolean
  childrensDinnerware: Boolean
  crib: Boolean
  place: PlaceCreateOneWithoutAmenitiesInput!
}

input AmenitiesCreateOneWithoutPlaceInput {
  create: AmenitiesCreateWithoutPlaceInput
  connect: AmenitiesWhereUniqueInput
}

input AmenitiesCreateWithoutPlaceInput {
  elevator: Boolean
  petsAllowed: Boolean
  internet: Boolean
  kitchen: Boolean
  wirelessInternet: Boolean
  familyKidFriendly: Boolean
  freeParkingOnPremises: Boolean
  hotTub: Boolean
  pool: Boolean
  smokingAllowed: Boolean
  wheelchairAccessible: Boolean
  breakfast: Boolean
  cableTv: Boolean
  suitableForEvents: Boolean
  dryer: Boolean
  washer: Boolean
  indoorFireplace: Boolean
  tv: Boolean
  heating: Boolean
  hangers: Boolean
  iron: Boolean
  hairDryer: Boolean
  doorman: Boolean
  paidParkingOffPremises: Boolean
  freeParkingOnStreet: Boolean
  gym: Boolean
  airConditioning: Boolean
  shampoo: Boolean
  essentials: Boolean
  laptopFriendlyWorkspace: Boolean
  privateEntrance: Boolean
  buzzerWirelessIntercom: Boolean
  babyBath: Boolean
  babyMonitor: Boolean
  babysitterRecommendations: Boolean
  bathtub: Boolean
  changingTable: Boolean
  childrensBooksAndToys: Boolean
  childrensDinnerware: Boolean
  crib: Boolean
}

"""An edge in a connection."""
type AmenitiesEdge {
  """The item at the end of the edge."""
  node: Amenities!

  """A cursor for use in pagination."""
  cursor: String!
}

enum AmenitiesOrderByInput {
  id_ASC
  id_DESC
  elevator_ASC
  elevator_DESC
  petsAllowed_ASC
  petsAllowed_DESC
  internet_ASC
  internet_DESC
  kitchen_ASC
  kitchen_DESC
  wirelessInternet_ASC
  wirelessInternet_DESC
  familyKidFriendly_ASC
  familyKidFriendly_DESC
  freeParkingOnPremises_ASC
  freeParkingOnPremises_DESC
  hotTub_ASC
  hotTub_DESC
  pool_ASC
  pool_DESC
  smokingAllowed_ASC
  smokingAllowed_DESC
  wheelchairAccessible_ASC
  wheelchairAccessible_DESC
  breakfast_ASC
  breakfast_DESC
  cableTv_ASC
  cableTv_DESC
  suitableForEvents_ASC
  suitableForEvents_DESC
  dryer_ASC
  dryer_DESC
  washer_ASC
  washer_DESC
  indoorFireplace_ASC
  indoorFireplace_DESC
  tv_ASC
  tv_DESC
  heating_ASC
  heating_DESC
  hangers_ASC
  hangers_DESC
  iron_ASC
  iron_DESC
  hairDryer_ASC
  hairDryer_DESC
  doorman_ASC
  doorman_DESC
  paidParkingOffPremises_ASC
  paidParkingOffPremises_DESC
  freeParkingOnStreet_ASC
  freeParkingOnStreet_DESC
  gym_ASC
  gym_DESC
  airConditioning_ASC
  airConditioning_DESC
  shampoo_ASC
  shampoo_DESC
  essentials_ASC
  essentials_DESC
  laptopFriendlyWorkspace_ASC
  laptopFriendlyWorkspace_DESC
  privateEntrance_ASC
  privateEntrance_DESC
  buzzerWirelessIntercom_ASC
  buzzerWirelessIntercom_DESC
  babyBath_ASC
  babyBath_DESC
  babyMonitor_ASC
  babyMonitor_DESC
  babysitterRecommendations_ASC
  babysitterRecommendations_DESC
  bathtub_ASC
  bathtub_DESC
  changingTable_ASC
  changingTable_DESC
  childrensBooksAndToys_ASC
  childrensBooksAndToys_DESC
  childrensDinnerware_ASC
  childrensDinnerware_DESC
  crib_ASC
  crib_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type AmenitiesPreviousValues {
  id: ID!
  elevator: Boolean!
  petsAllowed: Boolean!
  internet: Boolean!
  kitchen: Boolean!
  wirelessInternet: Boolean!
  familyKidFriendly: Boolean!
  freeParkingOnPremises: Boolean!
  hotTub: Boolean!
  pool: Boolean!
  smokingAllowed: Boolean!
  wheelchairAccessible: Boolean!
  breakfast: Boolean!
  cableTv: Boolean!
  suitableForEvents: Boolean!
  dryer: Boolean!
  washer: Boolean!
  indoorFireplace: Boolean!
  tv: Boolean!
  heating: Boolean!
  hangers: Boolean!
  iron: Boolean!
  hairDryer: Boolean!
  doorman: Boolean!
  paidParkingOffPremises: Boolean!
  freeParkingOnStreet: Boolean!
  gym: Boolean!
  airConditioning: Boolean!
  shampoo: Boolean!
  essentials: Boolean!
  laptopFriendlyWorkspace: Boolean!
  privateEntrance: Boolean!
  buzzerWirelessIntercom: Boolean!
  babyBath: Boolean!
  babyMonitor: Boolean!
  babysitterRecommendations: Boolean!
  bathtub: Boolean!
  changingTable: Boolean!
  childrensBooksAndToys: Boolean!
  childrensDinnerware: Boolean!
  crib: Boolean!
}

type AmenitiesSubscriptionPayload {
  mutation: MutationType!
  node: Amenities
  updatedFields: [String!]
  previousValues: AmenitiesPreviousValues
}

input AmenitiesSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [AmenitiesSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [AmenitiesSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AmenitiesSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: AmenitiesWhereInput
}

input AmenitiesUpdateInput {
  elevator: Boolean
  petsAllowed: Boolean
  internet: Boolean
  kitchen: Boolean
  wirelessInternet: Boolean
  familyKidFriendly: Boolean
  freeParkingOnPremises: Boolean
  hotTub: Boolean
  pool: Boolean
  smokingAllowed: Boolean
  wheelchairAccessible: Boolean
  breakfast: Boolean
  cableTv: Boolean
  suitableForEvents: Boolean
  dryer: Boolean
  washer: Boolean
  indoorFireplace: Boolean
  tv: Boolean
  heating: Boolean
  hangers: Boolean
  iron: Boolean
  hairDryer: Boolean
  doorman: Boolean
  paidParkingOffPremises: Boolean
  freeParkingOnStreet: Boolean
  gym: Boolean
  airConditioning: Boolean
  shampoo: Boolean
  essentials: Boolean
  laptopFriendlyWorkspace: Boolean
  privateEntrance: Boolean
  buzzerWirelessIntercom: Boolean
  babyBath: Boolean
  babyMonitor: Boolean
  babysitterRecommendations: Boolean
  bathtub: Boolean
  changingTable: Boolean
  childrensBooksAndToys: Boolean
  childrensDinnerware: Boolean
  crib: Boolean
  place: PlaceUpdateOneWithoutAmenitiesInput
}

input AmenitiesUpdateOneWithoutPlaceInput {
  create: AmenitiesCreateWithoutPlaceInput
  connect: AmenitiesWhereUniqueInput
  delete: Boolean
  update: AmenitiesUpdateWithoutPlaceDataInput
  upsert: AmenitiesUpsertWithoutPlaceInput
}

input AmenitiesUpdateWithoutPlaceDataInput {
  elevator: Boolean
  petsAllowed: Boolean
  internet: Boolean
  kitchen: Boolean
  wirelessInternet: Boolean
  familyKidFriendly: Boolean
  freeParkingOnPremises: Boolean
  hotTub: Boolean
  pool: Boolean
  smokingAllowed: Boolean
  wheelchairAccessible: Boolean
  breakfast: Boolean
  cableTv: Boolean
  suitableForEvents: Boolean
  dryer: Boolean
  washer: Boolean
  indoorFireplace: Boolean
  tv: Boolean
  heating: Boolean
  hangers: Boolean
  iron: Boolean
  hairDryer: Boolean
  doorman: Boolean
  paidParkingOffPremises: Boolean
  freeParkingOnStreet: Boolean
  gym: Boolean
  airConditioning: Boolean
  shampoo: Boolean
  essentials: Boolean
  laptopFriendlyWorkspace: Boolean
  privateEntrance: Boolean
  buzzerWirelessIntercom: Boolean
  babyBath: Boolean
  babyMonitor: Boolean
  babysitterRecommendations: Boolean
  bathtub: Boolean
  changingTable: Boolean
  childrensBooksAndToys: Boolean
  childrensDinnerware: Boolean
  crib: Boolean
}

input AmenitiesUpsertWithoutPlaceInput {
  update: AmenitiesUpdateWithoutPlaceDataInput!
  create: AmenitiesCreateWithoutPlaceInput!
}

input AmenitiesWhereInput {
  """Logical AND on all given filters."""
  AND: [AmenitiesWhereInput!]

  """Logical OR on all given filters."""
  OR: [AmenitiesWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AmenitiesWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  elevator: Boolean

  """All values that are not equal to given value."""
  elevator_not: Boolean
  petsAllowed: Boolean

  """All values that are not equal to given value."""
  petsAllowed_not: Boolean
  internet: Boolean

  """All values that are not equal to given value."""
  internet_not: Boolean
  kitchen: Boolean

  """All values that are not equal to given value."""
  kitchen_not: Boolean
  wirelessInternet: Boolean

  """All values that are not equal to given value."""
  wirelessInternet_not: Boolean
  familyKidFriendly: Boolean

  """All values that are not equal to given value."""
  familyKidFriendly_not: Boolean
  freeParkingOnPremises: Boolean

  """All values that are not equal to given value."""
  freeParkingOnPremises_not: Boolean
  hotTub: Boolean

  """All values that are not equal to given value."""
  hotTub_not: Boolean
  pool: Boolean

  """All values that are not equal to given value."""
  pool_not: Boolean
  smokingAllowed: Boolean

  """All values that are not equal to given value."""
  smokingAllowed_not: Boolean
  wheelchairAccessible: Boolean

  """All values that are not equal to given value."""
  wheelchairAccessible_not: Boolean
  breakfast: Boolean

  """All values that are not equal to given value."""
  breakfast_not: Boolean
  cableTv: Boolean

  """All values that are not equal to given value."""
  cableTv_not: Boolean
  suitableForEvents: Boolean

  """All values that are not equal to given value."""
  suitableForEvents_not: Boolean
  dryer: Boolean

  """All values that are not equal to given value."""
  dryer_not: Boolean
  washer: Boolean

  """All values that are not equal to given value."""
  washer_not: Boolean
  indoorFireplace: Boolean

  """All values that are not equal to given value."""
  indoorFireplace_not: Boolean
  tv: Boolean

  """All values that are not equal to given value."""
  tv_not: Boolean
  heating: Boolean

  """All values that are not equal to given value."""
  heating_not: Boolean
  hangers: Boolean

  """All values that are not equal to given value."""
  hangers_not: Boolean
  iron: Boolean

  """All values that are not equal to given value."""
  iron_not: Boolean
  hairDryer: Boolean

  """All values that are not equal to given value."""
  hairDryer_not: Boolean
  doorman: Boolean

  """All values that are not equal to given value."""
  doorman_not: Boolean
  paidParkingOffPremises: Boolean

  """All values that are not equal to given value."""
  paidParkingOffPremises_not: Boolean
  freeParkingOnStreet: Boolean

  """All values that are not equal to given value."""
  freeParkingOnStreet_not: Boolean
  gym: Boolean

  """All values that are not equal to given value."""
  gym_not: Boolean
  airConditioning: Boolean

  """All values that are not equal to given value."""
  airConditioning_not: Boolean
  shampoo: Boolean

  """All values that are not equal to given value."""
  shampoo_not: Boolean
  essentials: Boolean

  """All values that are not equal to given value."""
  essentials_not: Boolean
  laptopFriendlyWorkspace: Boolean

  """All values that are not equal to given value."""
  laptopFriendlyWorkspace_not: Boolean
  privateEntrance: Boolean

  """All values that are not equal to given value."""
  privateEntrance_not: Boolean
  buzzerWirelessIntercom: Boolean

  """All values that are not equal to given value."""
  buzzerWirelessIntercom_not: Boolean
  babyBath: Boolean

  """All values that are not equal to given value."""
  babyBath_not: Boolean
  babyMonitor: Boolean

  """All values that are not equal to given value."""
  babyMonitor_not: Boolean
  babysitterRecommendations: Boolean

  """All values that are not equal to given value."""
  babysitterRecommendations_not: Boolean
  bathtub: Boolean

  """All values that are not equal to given value."""
  bathtub_not: Boolean
  changingTable: Boolean

  """All values that are not equal to given value."""
  changingTable_not: Boolean
  childrensBooksAndToys: Boolean

  """All values that are not equal to given value."""
  childrensBooksAndToys_not: Boolean
  childrensDinnerware: Boolean

  """All values that are not equal to given value."""
  childrensDinnerware_not: Boolean
  crib: Boolean

  """All values that are not equal to given value."""
  crib_not: Boolean
  place: PlaceWhereInput
}

input AmenitiesWhereUniqueInput {
  id: ID
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type Booking implements Node {
  id: ID!
  createdAt: DateTime!
  bookee(where: UserWhereInput): User!
  place(where: PlaceWhereInput): Place!
  startDate: DateTime!
  endDate: DateTime!
  payment(where: PaymentWhereInput): Payment!
}

"""A connection to a list of items."""
type BookingConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [BookingEdge]!
  aggregate: AggregateBooking!
}

input BookingCreateInput {
  startDate: DateTime!
  endDate: DateTime!
  bookee: UserCreateOneWithoutBookingsInput!
  place: PlaceCreateOneWithoutBookingsInput!
  payment: PaymentCreateOneWithoutBookingInput!
}

input BookingCreateManyWithoutBookeeInput {
  create: [BookingCreateWithoutBookeeInput!]
  connect: [BookingWhereUniqueInput!]
}

input BookingCreateManyWithoutPlaceInput {
  create: [BookingCreateWithoutPlaceInput!]
  connect: [BookingWhereUniqueInput!]
}

input BookingCreateOneWithoutPaymentInput {
  create: BookingCreateWithoutPaymentInput
  connect: BookingWhereUniqueInput
}

input BookingCreateWithoutBookeeInput {
  startDate: DateTime!
  endDate: DateTime!
  place: PlaceCreateOneWithoutBookingsInput!
  payment: PaymentCreateOneWithoutBookingInput!
}

input BookingCreateWithoutPaymentInput {
  startDate: DateTime!
  endDate: DateTime!
  bookee: UserCreateOneWithoutBookingsInput!
  place: PlaceCreateOneWithoutBookingsInput!
}

input BookingCreateWithoutPlaceInput {
  startDate: DateTime!
  endDate: DateTime!
  bookee: UserCreateOneWithoutBookingsInput!
  payment: PaymentCreateOneWithoutBookingInput!
}

"""An edge in a connection."""
type BookingEdge {
  """The item at the end of the edge."""
  node: Booking!

  """A cursor for use in pagination."""
  cursor: String!
}

enum BookingOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  startDate_ASC
  startDate_DESC
  endDate_ASC
  endDate_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type BookingPreviousValues {
  id: ID!
  createdAt: DateTime!
  startDate: DateTime!
  endDate: DateTime!
}

type BookingSubscriptionPayload {
  mutation: MutationType!
  node: Booking
  updatedFields: [String!]
  previousValues: BookingPreviousValues
}

input BookingSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [BookingSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [BookingSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BookingSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: BookingWhereInput
}

input BookingUpdateInput {
  startDate: DateTime
  endDate: DateTime
  bookee: UserUpdateOneWithoutBookingsInput
  place: PlaceUpdateOneWithoutBookingsInput
  payment: PaymentUpdateOneWithoutBookingInput
}

input BookingUpdateManyWithoutBookeeInput {
  create: [BookingCreateWithoutBookeeInput!]
  connect: [BookingWhereUniqueInput!]
  disconnect: [BookingWhereUniqueInput!]
  delete: [BookingWhereUniqueInput!]
  update: [BookingUpdateWithWhereUniqueWithoutBookeeInput!]
  upsert: [BookingUpsertWithWhereUniqueWithoutBookeeInput!]
}

input BookingUpdateManyWithoutPlaceInput {
  create: [BookingCreateWithoutPlaceInput!]
  connect: [BookingWhereUniqueInput!]
  disconnect: [BookingWhereUniqueInput!]
  delete: [BookingWhereUniqueInput!]
  update: [BookingUpdateWithWhereUniqueWithoutPlaceInput!]
  upsert: [BookingUpsertWithWhereUniqueWithoutPlaceInput!]
}

input BookingUpdateOneWithoutPaymentInput {
  create: BookingCreateWithoutPaymentInput
  connect: BookingWhereUniqueInput
  delete: Boolean
  update: BookingUpdateWithoutPaymentDataInput
  upsert: BookingUpsertWithoutPaymentInput
}

input BookingUpdateWithoutBookeeDataInput {
  startDate: DateTime
  endDate: DateTime
  place: PlaceUpdateOneWithoutBookingsInput
  payment: PaymentUpdateOneWithoutBookingInput
}

input BookingUpdateWithoutPaymentDataInput {
  startDate: DateTime
  endDate: DateTime
  bookee: UserUpdateOneWithoutBookingsInput
  place: PlaceUpdateOneWithoutBookingsInput
}

input BookingUpdateWithoutPlaceDataInput {
  startDate: DateTime
  endDate: DateTime
  bookee: UserUpdateOneWithoutBookingsInput
  payment: PaymentUpdateOneWithoutBookingInput
}

input BookingUpdateWithWhereUniqueWithoutBookeeInput {
  where: BookingWhereUniqueInput!
  data: BookingUpdateWithoutBookeeDataInput!
}

input BookingUpdateWithWhereUniqueWithoutPlaceInput {
  where: BookingWhereUniqueInput!
  data: BookingUpdateWithoutPlaceDataInput!
}

input BookingUpsertWithoutPaymentInput {
  update: BookingUpdateWithoutPaymentDataInput!
  create: BookingCreateWithoutPaymentInput!
}

input BookingUpsertWithWhereUniqueWithoutBookeeInput {
  where: BookingWhereUniqueInput!
  update: BookingUpdateWithoutBookeeDataInput!
  create: BookingCreateWithoutBookeeInput!
}

input BookingUpsertWithWhereUniqueWithoutPlaceInput {
  where: BookingWhereUniqueInput!
  update: BookingUpdateWithoutPlaceDataInput!
  create: BookingCreateWithoutPlaceInput!
}

input BookingWhereInput {
  """Logical AND on all given filters."""
  AND: [BookingWhereInput!]

  """Logical OR on all given filters."""
  OR: [BookingWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BookingWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  startDate: DateTime

  """All values that are not equal to given value."""
  startDate_not: DateTime

  """All values that are contained in given list."""
  startDate_in: [DateTime!]

  """All values that are not contained in given list."""
  startDate_not_in: [DateTime!]

  """All values less than the given value."""
  startDate_lt: DateTime

  """All values less than or equal the given value."""
  startDate_lte: DateTime

  """All values greater than the given value."""
  startDate_gt: DateTime

  """All values greater than or equal the given value."""
  startDate_gte: DateTime
  endDate: DateTime

  """All values that are not equal to given value."""
  endDate_not: DateTime

  """All values that are contained in given list."""
  endDate_in: [DateTime!]

  """All values that are not contained in given list."""
  endDate_not_in: [DateTime!]

  """All values less than the given value."""
  endDate_lt: DateTime

  """All values less than or equal the given value."""
  endDate_lte: DateTime

  """All values greater than the given value."""
  endDate_gt: DateTime

  """All values greater than or equal the given value."""
  endDate_gte: DateTime
  bookee: UserWhereInput
  place: PlaceWhereInput
  payment: PaymentWhereInput
}

input BookingWhereUniqueInput {
  id: ID
}

type City implements Node {
  id: ID!
  name: String!
  neighbourhoods(where: NeighbourhoodWhereInput, orderBy: NeighbourhoodOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Neighbourhood!]
}

"""A connection to a list of items."""
type CityConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [CityEdge]!
  aggregate: AggregateCity!
}

input CityCreateInput {
  name: String!
  neighbourhoods: NeighbourhoodCreateManyWithoutCityInput
}

input CityCreateOneWithoutNeighbourhoodsInput {
  create: CityCreateWithoutNeighbourhoodsInput
  connect: CityWhereUniqueInput
}

input CityCreateWithoutNeighbourhoodsInput {
  name: String!
}

"""An edge in a connection."""
type CityEdge {
  """The item at the end of the edge."""
  node: City!

  """A cursor for use in pagination."""
  cursor: String!
}

enum CityOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type CityPreviousValues {
  id: ID!
  name: String!
}

type CitySubscriptionPayload {
  mutation: MutationType!
  node: City
  updatedFields: [String!]
  previousValues: CityPreviousValues
}

input CitySubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [CitySubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [CitySubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CitySubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CityWhereInput
}

input CityUpdateInput {
  name: String
  neighbourhoods: NeighbourhoodUpdateManyWithoutCityInput
}

input CityUpdateOneWithoutNeighbourhoodsInput {
  create: CityCreateWithoutNeighbourhoodsInput
  connect: CityWhereUniqueInput
  delete: Boolean
  update: CityUpdateWithoutNeighbourhoodsDataInput
  upsert: CityUpsertWithoutNeighbourhoodsInput
}

input CityUpdateWithoutNeighbourhoodsDataInput {
  name: String
}

input CityUpsertWithoutNeighbourhoodsInput {
  update: CityUpdateWithoutNeighbourhoodsDataInput!
  create: CityCreateWithoutNeighbourhoodsInput!
}

input CityWhereInput {
  """Logical AND on all given filters."""
  AND: [CityWhereInput!]

  """Logical OR on all given filters."""
  OR: [CityWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CityWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  neighbourhoods_every: NeighbourhoodWhereInput
  neighbourhoods_some: NeighbourhoodWhereInput
  neighbourhoods_none: NeighbourhoodWhereInput
}

input CityWhereUniqueInput {
  id: ID
}

type CreditCardInformation implements Node {
  id: ID!
  createdAt: DateTime!
  cardNumber: String!
  expiresOnMonth: Int!
  expiresOnYear: Int!
  securityCode: String!
  firstName: String!
  lastName: String!
  postalCode: String!
  country: String!
  paymentAccount(where: PaymentAccountWhereInput): PaymentAccount
}

"""A connection to a list of items."""
type CreditCardInformationConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [CreditCardInformationEdge]!
  aggregate: AggregateCreditCardInformation!
}

input CreditCardInformationCreateInput {
  cardNumber: String!
  expiresOnMonth: Int!
  expiresOnYear: Int!
  securityCode: String!
  firstName: String!
  lastName: String!
  postalCode: String!
  country: String!
  paymentAccount: PaymentAccountCreateOneWithoutCreditcardInput
}

input CreditCardInformationCreateOneWithoutPaymentAccountInput {
  create: CreditCardInformationCreateWithoutPaymentAccountInput
  connect: CreditCardInformationWhereUniqueInput
}

input CreditCardInformationCreateWithoutPaymentAccountInput {
  cardNumber: String!
  expiresOnMonth: Int!
  expiresOnYear: Int!
  securityCode: String!
  firstName: String!
  lastName: String!
  postalCode: String!
  country: String!
}

"""An edge in a connection."""
type CreditCardInformationEdge {
  """The item at the end of the edge."""
  node: CreditCardInformation!

  """A cursor for use in pagination."""
  cursor: String!
}

enum CreditCardInformationOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  cardNumber_ASC
  cardNumber_DESC
  expiresOnMonth_ASC
  expiresOnMonth_DESC
  expiresOnYear_ASC
  expiresOnYear_DESC
  securityCode_ASC
  securityCode_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  postalCode_ASC
  postalCode_DESC
  country_ASC
  country_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CreditCardInformationPreviousValues {
  id: ID!
  createdAt: DateTime!
  cardNumber: String!
  expiresOnMonth: Int!
  expiresOnYear: Int!
  securityCode: String!
  firstName: String!
  lastName: String!
  postalCode: String!
  country: String!
}

type CreditCardInformationSubscriptionPayload {
  mutation: MutationType!
  node: CreditCardInformation
  updatedFields: [String!]
  previousValues: CreditCardInformationPreviousValues
}

input CreditCardInformationSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [CreditCardInformationSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [CreditCardInformationSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CreditCardInformationSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CreditCardInformationWhereInput
}

input CreditCardInformationUpdateInput {
  cardNumber: String
  expiresOnMonth: Int
  expiresOnYear: Int
  securityCode: String
  firstName: String
  lastName: String
  postalCode: String
  country: String
  paymentAccount: PaymentAccountUpdateOneWithoutCreditcardInput
}

input CreditCardInformationUpdateOneWithoutPaymentAccountInput {
  create: CreditCardInformationCreateWithoutPaymentAccountInput
  connect: CreditCardInformationWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: CreditCardInformationUpdateWithoutPaymentAccountDataInput
  upsert: CreditCardInformationUpsertWithoutPaymentAccountInput
}

input CreditCardInformationUpdateWithoutPaymentAccountDataInput {
  cardNumber: String
  expiresOnMonth: Int
  expiresOnYear: Int
  securityCode: String
  firstName: String
  lastName: String
  postalCode: String
  country: String
}

input CreditCardInformationUpsertWithoutPaymentAccountInput {
  update: CreditCardInformationUpdateWithoutPaymentAccountDataInput!
  create: CreditCardInformationCreateWithoutPaymentAccountInput!
}

input CreditCardInformationWhereInput {
  """Logical AND on all given filters."""
  AND: [CreditCardInformationWhereInput!]

  """Logical OR on all given filters."""
  OR: [CreditCardInformationWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CreditCardInformationWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  cardNumber: String

  """All values that are not equal to given value."""
  cardNumber_not: String

  """All values that are contained in given list."""
  cardNumber_in: [String!]

  """All values that are not contained in given list."""
  cardNumber_not_in: [String!]

  """All values less than the given value."""
  cardNumber_lt: String

  """All values less than or equal the given value."""
  cardNumber_lte: String

  """All values greater than the given value."""
  cardNumber_gt: String

  """All values greater than or equal the given value."""
  cardNumber_gte: String

  """All values containing the given string."""
  cardNumber_contains: String

  """All values not containing the given string."""
  cardNumber_not_contains: String

  """All values starting with the given string."""
  cardNumber_starts_with: String

  """All values not starting with the given string."""
  cardNumber_not_starts_with: String

  """All values ending with the given string."""
  cardNumber_ends_with: String

  """All values not ending with the given string."""
  cardNumber_not_ends_with: String
  expiresOnMonth: Int

  """All values that are not equal to given value."""
  expiresOnMonth_not: Int

  """All values that are contained in given list."""
  expiresOnMonth_in: [Int!]

  """All values that are not contained in given list."""
  expiresOnMonth_not_in: [Int!]

  """All values less than the given value."""
  expiresOnMonth_lt: Int

  """All values less than or equal the given value."""
  expiresOnMonth_lte: Int

  """All values greater than the given value."""
  expiresOnMonth_gt: Int

  """All values greater than or equal the given value."""
  expiresOnMonth_gte: Int
  expiresOnYear: Int

  """All values that are not equal to given value."""
  expiresOnYear_not: Int

  """All values that are contained in given list."""
  expiresOnYear_in: [Int!]

  """All values that are not contained in given list."""
  expiresOnYear_not_in: [Int!]

  """All values less than the given value."""
  expiresOnYear_lt: Int

  """All values less than or equal the given value."""
  expiresOnYear_lte: Int

  """All values greater than the given value."""
  expiresOnYear_gt: Int

  """All values greater than or equal the given value."""
  expiresOnYear_gte: Int
  securityCode: String

  """All values that are not equal to given value."""
  securityCode_not: String

  """All values that are contained in given list."""
  securityCode_in: [String!]

  """All values that are not contained in given list."""
  securityCode_not_in: [String!]

  """All values less than the given value."""
  securityCode_lt: String

  """All values less than or equal the given value."""
  securityCode_lte: String

  """All values greater than the given value."""
  securityCode_gt: String

  """All values greater than or equal the given value."""
  securityCode_gte: String

  """All values containing the given string."""
  securityCode_contains: String

  """All values not containing the given string."""
  securityCode_not_contains: String

  """All values starting with the given string."""
  securityCode_starts_with: String

  """All values not starting with the given string."""
  securityCode_not_starts_with: String

  """All values ending with the given string."""
  securityCode_ends_with: String

  """All values not ending with the given string."""
  securityCode_not_ends_with: String
  firstName: String

  """All values that are not equal to given value."""
  firstName_not: String

  """All values that are contained in given list."""
  firstName_in: [String!]

  """All values that are not contained in given list."""
  firstName_not_in: [String!]

  """All values less than the given value."""
  firstName_lt: String

  """All values less than or equal the given value."""
  firstName_lte: String

  """All values greater than the given value."""
  firstName_gt: String

  """All values greater than or equal the given value."""
  firstName_gte: String

  """All values containing the given string."""
  firstName_contains: String

  """All values not containing the given string."""
  firstName_not_contains: String

  """All values starting with the given string."""
  firstName_starts_with: String

  """All values not starting with the given string."""
  firstName_not_starts_with: String

  """All values ending with the given string."""
  firstName_ends_with: String

  """All values not ending with the given string."""
  firstName_not_ends_with: String
  lastName: String

  """All values that are not equal to given value."""
  lastName_not: String

  """All values that are contained in given list."""
  lastName_in: [String!]

  """All values that are not contained in given list."""
  lastName_not_in: [String!]

  """All values less than the given value."""
  lastName_lt: String

  """All values less than or equal the given value."""
  lastName_lte: String

  """All values greater than the given value."""
  lastName_gt: String

  """All values greater than or equal the given value."""
  lastName_gte: String

  """All values containing the given string."""
  lastName_contains: String

  """All values not containing the given string."""
  lastName_not_contains: String

  """All values starting with the given string."""
  lastName_starts_with: String

  """All values not starting with the given string."""
  lastName_not_starts_with: String

  """All values ending with the given string."""
  lastName_ends_with: String

  """All values not ending with the given string."""
  lastName_not_ends_with: String
  postalCode: String

  """All values that are not equal to given value."""
  postalCode_not: String

  """All values that are contained in given list."""
  postalCode_in: [String!]

  """All values that are not contained in given list."""
  postalCode_not_in: [String!]

  """All values less than the given value."""
  postalCode_lt: String

  """All values less than or equal the given value."""
  postalCode_lte: String

  """All values greater than the given value."""
  postalCode_gt: String

  """All values greater than or equal the given value."""
  postalCode_gte: String

  """All values containing the given string."""
  postalCode_contains: String

  """All values not containing the given string."""
  postalCode_not_contains: String

  """All values starting with the given string."""
  postalCode_starts_with: String

  """All values not starting with the given string."""
  postalCode_not_starts_with: String

  """All values ending with the given string."""
  postalCode_ends_with: String

  """All values not ending with the given string."""
  postalCode_not_ends_with: String
  country: String

  """All values that are not equal to given value."""
  country_not: String

  """All values that are contained in given list."""
  country_in: [String!]

  """All values that are not contained in given list."""
  country_not_in: [String!]

  """All values less than the given value."""
  country_lt: String

  """All values less than or equal the given value."""
  country_lte: String

  """All values greater than the given value."""
  country_gt: String

  """All values greater than or equal the given value."""
  country_gte: String

  """All values containing the given string."""
  country_contains: String

  """All values not containing the given string."""
  country_not_contains: String

  """All values starting with the given string."""
  country_starts_with: String

  """All values not starting with the given string."""
  country_not_starts_with: String

  """All values ending with the given string."""
  country_ends_with: String

  """All values not ending with the given string."""
  country_not_ends_with: String
  paymentAccount: PaymentAccountWhereInput
}

input CreditCardInformationWhereUniqueInput {
  id: ID
}

enum CURRENCY {
  CAD
  CHF
  EUR
  JPY
  USD
  ZAR
}

scalar DateTime

type Experience implements Node {
  id: ID!
  category(where: ExperienceCategoryWhereInput): ExperienceCategory
  title: String!
  host(where: UserWhereInput): User!
  location(where: LocationWhereInput): Location!
  pricePerPerson: Int!
  reviews(where: ReviewWhereInput, orderBy: ReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Review!]
  preview(where: PictureWhereInput): Picture!
  popularity: Int!
}

type ExperienceCategory implements Node {
  id: ID!
  mainColor: String!
  name: String!
  experience(where: ExperienceWhereInput): Experience
}

"""A connection to a list of items."""
type ExperienceCategoryConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ExperienceCategoryEdge]!
  aggregate: AggregateExperienceCategory!
}

input ExperienceCategoryCreateInput {
  mainColor: String
  name: String!
  experience: ExperienceCreateOneWithoutCategoryInput
}

input ExperienceCategoryCreateOneWithoutExperienceInput {
  create: ExperienceCategoryCreateWithoutExperienceInput
  connect: ExperienceCategoryWhereUniqueInput
}

input ExperienceCategoryCreateWithoutExperienceInput {
  mainColor: String
  name: String!
}

"""An edge in a connection."""
type ExperienceCategoryEdge {
  """The item at the end of the edge."""
  node: ExperienceCategory!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ExperienceCategoryOrderByInput {
  id_ASC
  id_DESC
  mainColor_ASC
  mainColor_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type ExperienceCategoryPreviousValues {
  id: ID!
  mainColor: String!
  name: String!
}

type ExperienceCategorySubscriptionPayload {
  mutation: MutationType!
  node: ExperienceCategory
  updatedFields: [String!]
  previousValues: ExperienceCategoryPreviousValues
}

input ExperienceCategorySubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ExperienceCategorySubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ExperienceCategorySubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ExperienceCategorySubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ExperienceCategoryWhereInput
}

input ExperienceCategoryUpdateInput {
  mainColor: String
  name: String
  experience: ExperienceUpdateOneWithoutCategoryInput
}

input ExperienceCategoryUpdateOneWithoutExperienceInput {
  create: ExperienceCategoryCreateWithoutExperienceInput
  connect: ExperienceCategoryWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: ExperienceCategoryUpdateWithoutExperienceDataInput
  upsert: ExperienceCategoryUpsertWithoutExperienceInput
}

input ExperienceCategoryUpdateWithoutExperienceDataInput {
  mainColor: String
  name: String
}

input ExperienceCategoryUpsertWithoutExperienceInput {
  update: ExperienceCategoryUpdateWithoutExperienceDataInput!
  create: ExperienceCategoryCreateWithoutExperienceInput!
}

input ExperienceCategoryWhereInput {
  """Logical AND on all given filters."""
  AND: [ExperienceCategoryWhereInput!]

  """Logical OR on all given filters."""
  OR: [ExperienceCategoryWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ExperienceCategoryWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  mainColor: String

  """All values that are not equal to given value."""
  mainColor_not: String

  """All values that are contained in given list."""
  mainColor_in: [String!]

  """All values that are not contained in given list."""
  mainColor_not_in: [String!]

  """All values less than the given value."""
  mainColor_lt: String

  """All values less than or equal the given value."""
  mainColor_lte: String

  """All values greater than the given value."""
  mainColor_gt: String

  """All values greater than or equal the given value."""
  mainColor_gte: String

  """All values containing the given string."""
  mainColor_contains: String

  """All values not containing the given string."""
  mainColor_not_contains: String

  """All values starting with the given string."""
  mainColor_starts_with: String

  """All values not starting with the given string."""
  mainColor_not_starts_with: String

  """All values ending with the given string."""
  mainColor_ends_with: String

  """All values not ending with the given string."""
  mainColor_not_ends_with: String
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  experience: ExperienceWhereInput
}

input ExperienceCategoryWhereUniqueInput {
  id: ID
}

"""A connection to a list of items."""
type ExperienceConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ExperienceEdge]!
  aggregate: AggregateExperience!
}

input ExperienceCreateInput {
  title: String!
  pricePerPerson: Int!
  popularity: Int!
  category: ExperienceCategoryCreateOneWithoutExperienceInput
  host: UserCreateOneWithoutHostingExperiencesInput!
  location: LocationCreateOneWithoutExperienceInput!
  reviews: ReviewCreateManyWithoutExperienceInput
  preview: PictureCreateOneInput!
}

input ExperienceCreateManyWithoutHostInput {
  create: [ExperienceCreateWithoutHostInput!]
  connect: [ExperienceWhereUniqueInput!]
}

input ExperienceCreateOneWithoutCategoryInput {
  create: ExperienceCreateWithoutCategoryInput
  connect: ExperienceWhereUniqueInput
}

input ExperienceCreateOneWithoutLocationInput {
  create: ExperienceCreateWithoutLocationInput
  connect: ExperienceWhereUniqueInput
}

input ExperienceCreateOneWithoutReviewsInput {
  create: ExperienceCreateWithoutReviewsInput
  connect: ExperienceWhereUniqueInput
}

input ExperienceCreateWithoutCategoryInput {
  title: String!
  pricePerPerson: Int!
  popularity: Int!
  host: UserCreateOneWithoutHostingExperiencesInput!
  location: LocationCreateOneWithoutExperienceInput!
  reviews: ReviewCreateManyWithoutExperienceInput
  preview: PictureCreateOneInput!
}

input ExperienceCreateWithoutHostInput {
  title: String!
  pricePerPerson: Int!
  popularity: Int!
  category: ExperienceCategoryCreateOneWithoutExperienceInput
  location: LocationCreateOneWithoutExperienceInput!
  reviews: ReviewCreateManyWithoutExperienceInput
  preview: PictureCreateOneInput!
}

input ExperienceCreateWithoutLocationInput {
  title: String!
  pricePerPerson: Int!
  popularity: Int!
  category: ExperienceCategoryCreateOneWithoutExperienceInput
  host: UserCreateOneWithoutHostingExperiencesInput!
  reviews: ReviewCreateManyWithoutExperienceInput
  preview: PictureCreateOneInput!
}

input ExperienceCreateWithoutReviewsInput {
  title: String!
  pricePerPerson: Int!
  popularity: Int!
  category: ExperienceCategoryCreateOneWithoutExperienceInput
  host: UserCreateOneWithoutHostingExperiencesInput!
  location: LocationCreateOneWithoutExperienceInput!
  preview: PictureCreateOneInput!
}

"""An edge in a connection."""
type ExperienceEdge {
  """The item at the end of the edge."""
  node: Experience!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ExperienceOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  pricePerPerson_ASC
  pricePerPerson_DESC
  popularity_ASC
  popularity_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type ExperiencePreviousValues {
  id: ID!
  title: String!
  pricePerPerson: Int!
  popularity: Int!
}

type ExperienceSubscriptionPayload {
  mutation: MutationType!
  node: Experience
  updatedFields: [String!]
  previousValues: ExperiencePreviousValues
}

input ExperienceSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ExperienceSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ExperienceSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ExperienceSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ExperienceWhereInput
}

input ExperienceUpdateInput {
  title: String
  pricePerPerson: Int
  popularity: Int
  category: ExperienceCategoryUpdateOneWithoutExperienceInput
  host: UserUpdateOneWithoutHostingExperiencesInput
  location: LocationUpdateOneWithoutExperienceInput
  reviews: ReviewUpdateManyWithoutExperienceInput
  preview: PictureUpdateOneInput
}

input ExperienceUpdateManyWithoutHostInput {
  create: [ExperienceCreateWithoutHostInput!]
  connect: [ExperienceWhereUniqueInput!]
  disconnect: [ExperienceWhereUniqueInput!]
  delete: [ExperienceWhereUniqueInput!]
  update: [ExperienceUpdateWithWhereUniqueWithoutHostInput!]
  upsert: [ExperienceUpsertWithWhereUniqueWithoutHostInput!]
}

input ExperienceUpdateOneWithoutCategoryInput {
  create: ExperienceCreateWithoutCategoryInput
  connect: ExperienceWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: ExperienceUpdateWithoutCategoryDataInput
  upsert: ExperienceUpsertWithoutCategoryInput
}

input ExperienceUpdateOneWithoutLocationInput {
  create: ExperienceCreateWithoutLocationInput
  connect: ExperienceWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: ExperienceUpdateWithoutLocationDataInput
  upsert: ExperienceUpsertWithoutLocationInput
}

input ExperienceUpdateOneWithoutReviewsInput {
  create: ExperienceCreateWithoutReviewsInput
  connect: ExperienceWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: ExperienceUpdateWithoutReviewsDataInput
  upsert: ExperienceUpsertWithoutReviewsInput
}

input ExperienceUpdateWithoutCategoryDataInput {
  title: String
  pricePerPerson: Int
  popularity: Int
  host: UserUpdateOneWithoutHostingExperiencesInput
  location: LocationUpdateOneWithoutExperienceInput
  reviews: ReviewUpdateManyWithoutExperienceInput
  preview: PictureUpdateOneInput
}

input ExperienceUpdateWithoutHostDataInput {
  title: String
  pricePerPerson: Int
  popularity: Int
  category: ExperienceCategoryUpdateOneWithoutExperienceInput
  location: LocationUpdateOneWithoutExperienceInput
  reviews: ReviewUpdateManyWithoutExperienceInput
  preview: PictureUpdateOneInput
}

input ExperienceUpdateWithoutLocationDataInput {
  title: String
  pricePerPerson: Int
  popularity: Int
  category: ExperienceCategoryUpdateOneWithoutExperienceInput
  host: UserUpdateOneWithoutHostingExperiencesInput
  reviews: ReviewUpdateManyWithoutExperienceInput
  preview: PictureUpdateOneInput
}

input ExperienceUpdateWithoutReviewsDataInput {
  title: String
  pricePerPerson: Int
  popularity: Int
  category: ExperienceCategoryUpdateOneWithoutExperienceInput
  host: UserUpdateOneWithoutHostingExperiencesInput
  location: LocationUpdateOneWithoutExperienceInput
  preview: PictureUpdateOneInput
}

input ExperienceUpdateWithWhereUniqueWithoutHostInput {
  where: ExperienceWhereUniqueInput!
  data: ExperienceUpdateWithoutHostDataInput!
}

input ExperienceUpsertWithoutCategoryInput {
  update: ExperienceUpdateWithoutCategoryDataInput!
  create: ExperienceCreateWithoutCategoryInput!
}

input ExperienceUpsertWithoutLocationInput {
  update: ExperienceUpdateWithoutLocationDataInput!
  create: ExperienceCreateWithoutLocationInput!
}

input ExperienceUpsertWithoutReviewsInput {
  update: ExperienceUpdateWithoutReviewsDataInput!
  create: ExperienceCreateWithoutReviewsInput!
}

input ExperienceUpsertWithWhereUniqueWithoutHostInput {
  where: ExperienceWhereUniqueInput!
  update: ExperienceUpdateWithoutHostDataInput!
  create: ExperienceCreateWithoutHostInput!
}

input ExperienceWhereInput {
  """Logical AND on all given filters."""
  AND: [ExperienceWhereInput!]

  """Logical OR on all given filters."""
  OR: [ExperienceWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ExperienceWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  pricePerPerson: Int

  """All values that are not equal to given value."""
  pricePerPerson_not: Int

  """All values that are contained in given list."""
  pricePerPerson_in: [Int!]

  """All values that are not contained in given list."""
  pricePerPerson_not_in: [Int!]

  """All values less than the given value."""
  pricePerPerson_lt: Int

  """All values less than or equal the given value."""
  pricePerPerson_lte: Int

  """All values greater than the given value."""
  pricePerPerson_gt: Int

  """All values greater than or equal the given value."""
  pricePerPerson_gte: Int
  popularity: Int

  """All values that are not equal to given value."""
  popularity_not: Int

  """All values that are contained in given list."""
  popularity_in: [Int!]

  """All values that are not contained in given list."""
  popularity_not_in: [Int!]

  """All values less than the given value."""
  popularity_lt: Int

  """All values less than or equal the given value."""
  popularity_lte: Int

  """All values greater than the given value."""
  popularity_gt: Int

  """All values greater than or equal the given value."""
  popularity_gte: Int
  category: ExperienceCategoryWhereInput
  host: UserWhereInput
  location: LocationWhereInput
  reviews_every: ReviewWhereInput
  reviews_some: ReviewWhereInput
  reviews_none: ReviewWhereInput
  preview: PictureWhereInput
}

input ExperienceWhereUniqueInput {
  id: ID
}

type GuestRequirements implements Node {
  id: ID!
  govIssuedId: Boolean!
  recommendationsFromOtherHosts: Boolean!
  guestTripInformation: Boolean!
  place(where: PlaceWhereInput): Place!
}

"""A connection to a list of items."""
type GuestRequirementsConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [GuestRequirementsEdge]!
  aggregate: AggregateGuestRequirements!
}

input GuestRequirementsCreateInput {
  govIssuedId: Boolean
  recommendationsFromOtherHosts: Boolean
  guestTripInformation: Boolean
  place: PlaceCreateOneWithoutGuestRequirementsInput!
}

input GuestRequirementsCreateOneWithoutPlaceInput {
  create: GuestRequirementsCreateWithoutPlaceInput
  connect: GuestRequirementsWhereUniqueInput
}

input GuestRequirementsCreateWithoutPlaceInput {
  govIssuedId: Boolean
  recommendationsFromOtherHosts: Boolean
  guestTripInformation: Boolean
}

"""An edge in a connection."""
type GuestRequirementsEdge {
  """The item at the end of the edge."""
  node: GuestRequirements!

  """A cursor for use in pagination."""
  cursor: String!
}

enum GuestRequirementsOrderByInput {
  id_ASC
  id_DESC
  govIssuedId_ASC
  govIssuedId_DESC
  recommendationsFromOtherHosts_ASC
  recommendationsFromOtherHosts_DESC
  guestTripInformation_ASC
  guestTripInformation_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type GuestRequirementsPreviousValues {
  id: ID!
  govIssuedId: Boolean!
  recommendationsFromOtherHosts: Boolean!
  guestTripInformation: Boolean!
}

type GuestRequirementsSubscriptionPayload {
  mutation: MutationType!
  node: GuestRequirements
  updatedFields: [String!]
  previousValues: GuestRequirementsPreviousValues
}

input GuestRequirementsSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [GuestRequirementsSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [GuestRequirementsSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GuestRequirementsSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: GuestRequirementsWhereInput
}

input GuestRequirementsUpdateInput {
  govIssuedId: Boolean
  recommendationsFromOtherHosts: Boolean
  guestTripInformation: Boolean
  place: PlaceUpdateOneWithoutGuestRequirementsInput
}

input GuestRequirementsUpdateOneWithoutPlaceInput {
  create: GuestRequirementsCreateWithoutPlaceInput
  connect: GuestRequirementsWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: GuestRequirementsUpdateWithoutPlaceDataInput
  upsert: GuestRequirementsUpsertWithoutPlaceInput
}

input GuestRequirementsUpdateWithoutPlaceDataInput {
  govIssuedId: Boolean
  recommendationsFromOtherHosts: Boolean
  guestTripInformation: Boolean
}

input GuestRequirementsUpsertWithoutPlaceInput {
  update: GuestRequirementsUpdateWithoutPlaceDataInput!
  create: GuestRequirementsCreateWithoutPlaceInput!
}

input GuestRequirementsWhereInput {
  """Logical AND on all given filters."""
  AND: [GuestRequirementsWhereInput!]

  """Logical OR on all given filters."""
  OR: [GuestRequirementsWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GuestRequirementsWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  govIssuedId: Boolean

  """All values that are not equal to given value."""
  govIssuedId_not: Boolean
  recommendationsFromOtherHosts: Boolean

  """All values that are not equal to given value."""
  recommendationsFromOtherHosts_not: Boolean
  guestTripInformation: Boolean

  """All values that are not equal to given value."""
  guestTripInformation_not: Boolean
  place: PlaceWhereInput
}

input GuestRequirementsWhereUniqueInput {
  id: ID
}

type HouseRules implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  suitableForChildren: Boolean
  suitableForInfants: Boolean
  petsAllowed: Boolean
  smokingAllowed: Boolean
  partiesAndEventsAllowed: Boolean
  additionalRules: String
}

"""A connection to a list of items."""
type HouseRulesConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [HouseRulesEdge]!
  aggregate: AggregateHouseRules!
}

input HouseRulesCreateInput {
  suitableForChildren: Boolean
  suitableForInfants: Boolean
  petsAllowed: Boolean
  smokingAllowed: Boolean
  partiesAndEventsAllowed: Boolean
  additionalRules: String
}

input HouseRulesCreateOneInput {
  create: HouseRulesCreateInput
  connect: HouseRulesWhereUniqueInput
}

"""An edge in a connection."""
type HouseRulesEdge {
  """The item at the end of the edge."""
  node: HouseRules!

  """A cursor for use in pagination."""
  cursor: String!
}

enum HouseRulesOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  suitableForChildren_ASC
  suitableForChildren_DESC
  suitableForInfants_ASC
  suitableForInfants_DESC
  petsAllowed_ASC
  petsAllowed_DESC
  smokingAllowed_ASC
  smokingAllowed_DESC
  partiesAndEventsAllowed_ASC
  partiesAndEventsAllowed_DESC
  additionalRules_ASC
  additionalRules_DESC
}

type HouseRulesPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  suitableForChildren: Boolean
  suitableForInfants: Boolean
  petsAllowed: Boolean
  smokingAllowed: Boolean
  partiesAndEventsAllowed: Boolean
  additionalRules: String
}

type HouseRulesSubscriptionPayload {
  mutation: MutationType!
  node: HouseRules
  updatedFields: [String!]
  previousValues: HouseRulesPreviousValues
}

input HouseRulesSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [HouseRulesSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [HouseRulesSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [HouseRulesSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: HouseRulesWhereInput
}

input HouseRulesUpdateDataInput {
  suitableForChildren: Boolean
  suitableForInfants: Boolean
  petsAllowed: Boolean
  smokingAllowed: Boolean
  partiesAndEventsAllowed: Boolean
  additionalRules: String
}

input HouseRulesUpdateInput {
  suitableForChildren: Boolean
  suitableForInfants: Boolean
  petsAllowed: Boolean
  smokingAllowed: Boolean
  partiesAndEventsAllowed: Boolean
  additionalRules: String
}

input HouseRulesUpdateOneInput {
  create: HouseRulesCreateInput
  connect: HouseRulesWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: HouseRulesUpdateDataInput
  upsert: HouseRulesUpsertNestedInput
}

input HouseRulesUpsertNestedInput {
  update: HouseRulesUpdateDataInput!
  create: HouseRulesCreateInput!
}

input HouseRulesWhereInput {
  """Logical AND on all given filters."""
  AND: [HouseRulesWhereInput!]

  """Logical OR on all given filters."""
  OR: [HouseRulesWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [HouseRulesWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  suitableForChildren: Boolean

  """All values that are not equal to given value."""
  suitableForChildren_not: Boolean
  suitableForInfants: Boolean

  """All values that are not equal to given value."""
  suitableForInfants_not: Boolean
  petsAllowed: Boolean

  """All values that are not equal to given value."""
  petsAllowed_not: Boolean
  smokingAllowed: Boolean

  """All values that are not equal to given value."""
  smokingAllowed_not: Boolean
  partiesAndEventsAllowed: Boolean

  """All values that are not equal to given value."""
  partiesAndEventsAllowed_not: Boolean
  additionalRules: String

  """All values that are not equal to given value."""
  additionalRules_not: String

  """All values that are contained in given list."""
  additionalRules_in: [String!]

  """All values that are not contained in given list."""
  additionalRules_not_in: [String!]

  """All values less than the given value."""
  additionalRules_lt: String

  """All values less than or equal the given value."""
  additionalRules_lte: String

  """All values greater than the given value."""
  additionalRules_gt: String

  """All values greater than or equal the given value."""
  additionalRules_gte: String

  """All values containing the given string."""
  additionalRules_contains: String

  """All values not containing the given string."""
  additionalRules_not_contains: String

  """All values starting with the given string."""
  additionalRules_starts_with: String

  """All values not starting with the given string."""
  additionalRules_not_starts_with: String

  """All values ending with the given string."""
  additionalRules_ends_with: String

  """All values not ending with the given string."""
  additionalRules_not_ends_with: String
}

input HouseRulesWhereUniqueInput {
  id: ID
}

type Location implements Node {
  id: ID!
  lat: Float!
  lng: Float!
  neighbourHood(where: NeighbourhoodWhereInput): Neighbourhood
  user(where: UserWhereInput): User
  place(where: PlaceWhereInput): Place
  address: String
  directions: String
  experience(where: ExperienceWhereInput): Experience
  restaurant(where: RestaurantWhereInput): Restaurant
}

"""A connection to a list of items."""
type LocationConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [LocationEdge]!
  aggregate: AggregateLocation!
}

input LocationCreateInput {
  lat: Float!
  lng: Float!
  address: String
  directions: String
  neighbourHood: NeighbourhoodCreateOneWithoutLocationsInput
  user: UserCreateOneWithoutLocationInput
  place: PlaceCreateOneWithoutLocationInput
  experience: ExperienceCreateOneWithoutLocationInput
  restaurant: RestaurantCreateOneWithoutLocationInput
}

input LocationCreateManyWithoutNeighbourHoodInput {
  create: [LocationCreateWithoutNeighbourHoodInput!]
  connect: [LocationWhereUniqueInput!]
}

input LocationCreateOneWithoutExperienceInput {
  create: LocationCreateWithoutExperienceInput
  connect: LocationWhereUniqueInput
}

input LocationCreateOneWithoutPlaceInput {
  create: LocationCreateWithoutPlaceInput
  connect: LocationWhereUniqueInput
}

input LocationCreateOneWithoutRestaurantInput {
  create: LocationCreateWithoutRestaurantInput
  connect: LocationWhereUniqueInput
}

input LocationCreateOneWithoutUserInput {
  create: LocationCreateWithoutUserInput
  connect: LocationWhereUniqueInput
}

input LocationCreateWithoutExperienceInput {
  lat: Float!
  lng: Float!
  address: String
  directions: String
  neighbourHood: NeighbourhoodCreateOneWithoutLocationsInput
  user: UserCreateOneWithoutLocationInput
  place: PlaceCreateOneWithoutLocationInput
  restaurant: RestaurantCreateOneWithoutLocationInput
}

input LocationCreateWithoutNeighbourHoodInput {
  lat: Float!
  lng: Float!
  address: String
  directions: String
  user: UserCreateOneWithoutLocationInput
  place: PlaceCreateOneWithoutLocationInput
  experience: ExperienceCreateOneWithoutLocationInput
  restaurant: RestaurantCreateOneWithoutLocationInput
}

input LocationCreateWithoutPlaceInput {
  lat: Float!
  lng: Float!
  address: String
  directions: String
  neighbourHood: NeighbourhoodCreateOneWithoutLocationsInput
  user: UserCreateOneWithoutLocationInput
  experience: ExperienceCreateOneWithoutLocationInput
  restaurant: RestaurantCreateOneWithoutLocationInput
}

input LocationCreateWithoutRestaurantInput {
  lat: Float!
  lng: Float!
  address: String
  directions: String
  neighbourHood: NeighbourhoodCreateOneWithoutLocationsInput
  user: UserCreateOneWithoutLocationInput
  place: PlaceCreateOneWithoutLocationInput
  experience: ExperienceCreateOneWithoutLocationInput
}

input LocationCreateWithoutUserInput {
  lat: Float!
  lng: Float!
  address: String
  directions: String
  neighbourHood: NeighbourhoodCreateOneWithoutLocationsInput
  place: PlaceCreateOneWithoutLocationInput
  experience: ExperienceCreateOneWithoutLocationInput
  restaurant: RestaurantCreateOneWithoutLocationInput
}

"""An edge in a connection."""
type LocationEdge {
  """The item at the end of the edge."""
  node: Location!

  """A cursor for use in pagination."""
  cursor: String!
}

enum LocationOrderByInput {
  id_ASC
  id_DESC
  lat_ASC
  lat_DESC
  lng_ASC
  lng_DESC
  address_ASC
  address_DESC
  directions_ASC
  directions_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type LocationPreviousValues {
  id: ID!
  lat: Float!
  lng: Float!
  address: String
  directions: String
}

type LocationSubscriptionPayload {
  mutation: MutationType!
  node: Location
  updatedFields: [String!]
  previousValues: LocationPreviousValues
}

input LocationSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [LocationSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [LocationSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LocationSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: LocationWhereInput
}

input LocationUpdateInput {
  lat: Float
  lng: Float
  address: String
  directions: String
  neighbourHood: NeighbourhoodUpdateOneWithoutLocationsInput
  user: UserUpdateOneWithoutLocationInput
  place: PlaceUpdateOneWithoutLocationInput
  experience: ExperienceUpdateOneWithoutLocationInput
  restaurant: RestaurantUpdateOneWithoutLocationInput
}

input LocationUpdateManyWithoutNeighbourHoodInput {
  create: [LocationCreateWithoutNeighbourHoodInput!]
  connect: [LocationWhereUniqueInput!]
  disconnect: [LocationWhereUniqueInput!]
  delete: [LocationWhereUniqueInput!]
  update: [LocationUpdateWithWhereUniqueWithoutNeighbourHoodInput!]
  upsert: [LocationUpsertWithWhereUniqueWithoutNeighbourHoodInput!]
}

input LocationUpdateOneWithoutExperienceInput {
  create: LocationCreateWithoutExperienceInput
  connect: LocationWhereUniqueInput
  delete: Boolean
  update: LocationUpdateWithoutExperienceDataInput
  upsert: LocationUpsertWithoutExperienceInput
}

input LocationUpdateOneWithoutPlaceInput {
  create: LocationCreateWithoutPlaceInput
  connect: LocationWhereUniqueInput
  delete: Boolean
  update: LocationUpdateWithoutPlaceDataInput
  upsert: LocationUpsertWithoutPlaceInput
}

input LocationUpdateOneWithoutRestaurantInput {
  create: LocationCreateWithoutRestaurantInput
  connect: LocationWhereUniqueInput
  delete: Boolean
  update: LocationUpdateWithoutRestaurantDataInput
  upsert: LocationUpsertWithoutRestaurantInput
}

input LocationUpdateOneWithoutUserInput {
  create: LocationCreateWithoutUserInput
  connect: LocationWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: LocationUpdateWithoutUserDataInput
  upsert: LocationUpsertWithoutUserInput
}

input LocationUpdateWithoutExperienceDataInput {
  lat: Float
  lng: Float
  address: String
  directions: String
  neighbourHood: NeighbourhoodUpdateOneWithoutLocationsInput
  user: UserUpdateOneWithoutLocationInput
  place: PlaceUpdateOneWithoutLocationInput
  restaurant: RestaurantUpdateOneWithoutLocationInput
}

input LocationUpdateWithoutNeighbourHoodDataInput {
  lat: Float
  lng: Float
  address: String
  directions: String
  user: UserUpdateOneWithoutLocationInput
  place: PlaceUpdateOneWithoutLocationInput
  experience: ExperienceUpdateOneWithoutLocationInput
  restaurant: RestaurantUpdateOneWithoutLocationInput
}

input LocationUpdateWithoutPlaceDataInput {
  lat: Float
  lng: Float
  address: String
  directions: String
  neighbourHood: NeighbourhoodUpdateOneWithoutLocationsInput
  user: UserUpdateOneWithoutLocationInput
  experience: ExperienceUpdateOneWithoutLocationInput
  restaurant: RestaurantUpdateOneWithoutLocationInput
}

input LocationUpdateWithoutRestaurantDataInput {
  lat: Float
  lng: Float
  address: String
  directions: String
  neighbourHood: NeighbourhoodUpdateOneWithoutLocationsInput
  user: UserUpdateOneWithoutLocationInput
  place: PlaceUpdateOneWithoutLocationInput
  experience: ExperienceUpdateOneWithoutLocationInput
}

input LocationUpdateWithoutUserDataInput {
  lat: Float
  lng: Float
  address: String
  directions: String
  neighbourHood: NeighbourhoodUpdateOneWithoutLocationsInput
  place: PlaceUpdateOneWithoutLocationInput
  experience: ExperienceUpdateOneWithoutLocationInput
  restaurant: RestaurantUpdateOneWithoutLocationInput
}

input LocationUpdateWithWhereUniqueWithoutNeighbourHoodInput {
  where: LocationWhereUniqueInput!
  data: LocationUpdateWithoutNeighbourHoodDataInput!
}

input LocationUpsertWithoutExperienceInput {
  update: LocationUpdateWithoutExperienceDataInput!
  create: LocationCreateWithoutExperienceInput!
}

input LocationUpsertWithoutPlaceInput {
  update: LocationUpdateWithoutPlaceDataInput!
  create: LocationCreateWithoutPlaceInput!
}

input LocationUpsertWithoutRestaurantInput {
  update: LocationUpdateWithoutRestaurantDataInput!
  create: LocationCreateWithoutRestaurantInput!
}

input LocationUpsertWithoutUserInput {
  update: LocationUpdateWithoutUserDataInput!
  create: LocationCreateWithoutUserInput!
}

input LocationUpsertWithWhereUniqueWithoutNeighbourHoodInput {
  where: LocationWhereUniqueInput!
  update: LocationUpdateWithoutNeighbourHoodDataInput!
  create: LocationCreateWithoutNeighbourHoodInput!
}

input LocationWhereInput {
  """Logical AND on all given filters."""
  AND: [LocationWhereInput!]

  """Logical OR on all given filters."""
  OR: [LocationWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LocationWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  lat: Float

  """All values that are not equal to given value."""
  lat_not: Float

  """All values that are contained in given list."""
  lat_in: [Float!]

  """All values that are not contained in given list."""
  lat_not_in: [Float!]

  """All values less than the given value."""
  lat_lt: Float

  """All values less than or equal the given value."""
  lat_lte: Float

  """All values greater than the given value."""
  lat_gt: Float

  """All values greater than or equal the given value."""
  lat_gte: Float
  lng: Float

  """All values that are not equal to given value."""
  lng_not: Float

  """All values that are contained in given list."""
  lng_in: [Float!]

  """All values that are not contained in given list."""
  lng_not_in: [Float!]

  """All values less than the given value."""
  lng_lt: Float

  """All values less than or equal the given value."""
  lng_lte: Float

  """All values greater than the given value."""
  lng_gt: Float

  """All values greater than or equal the given value."""
  lng_gte: Float
  address: String

  """All values that are not equal to given value."""
  address_not: String

  """All values that are contained in given list."""
  address_in: [String!]

  """All values that are not contained in given list."""
  address_not_in: [String!]

  """All values less than the given value."""
  address_lt: String

  """All values less than or equal the given value."""
  address_lte: String

  """All values greater than the given value."""
  address_gt: String

  """All values greater than or equal the given value."""
  address_gte: String

  """All values containing the given string."""
  address_contains: String

  """All values not containing the given string."""
  address_not_contains: String

  """All values starting with the given string."""
  address_starts_with: String

  """All values not starting with the given string."""
  address_not_starts_with: String

  """All values ending with the given string."""
  address_ends_with: String

  """All values not ending with the given string."""
  address_not_ends_with: String
  directions: String

  """All values that are not equal to given value."""
  directions_not: String

  """All values that are contained in given list."""
  directions_in: [String!]

  """All values that are not contained in given list."""
  directions_not_in: [String!]

  """All values less than the given value."""
  directions_lt: String

  """All values less than or equal the given value."""
  directions_lte: String

  """All values greater than the given value."""
  directions_gt: String

  """All values greater than or equal the given value."""
  directions_gte: String

  """All values containing the given string."""
  directions_contains: String

  """All values not containing the given string."""
  directions_not_contains: String

  """All values starting with the given string."""
  directions_starts_with: String

  """All values not starting with the given string."""
  directions_not_starts_with: String

  """All values ending with the given string."""
  directions_ends_with: String

  """All values not ending with the given string."""
  directions_not_ends_with: String
  neighbourHood: NeighbourhoodWhereInput
  user: UserWhereInput
  place: PlaceWhereInput
  experience: ExperienceWhereInput
  restaurant: RestaurantWhereInput
}

input LocationWhereUniqueInput {
  id: ID
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Message implements Node {
  id: ID!
  createdAt: DateTime!
  from(where: UserWhereInput): User!
  to(where: UserWhereInput): User!
  deliveredAt: DateTime!
  readAt: DateTime!
}

"""A connection to a list of items."""
type MessageConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [MessageEdge]!
  aggregate: AggregateMessage!
}

input MessageCreateInput {
  deliveredAt: DateTime!
  readAt: DateTime!
  from: UserCreateOneWithoutSentMessagesInput!
  to: UserCreateOneWithoutReceivedMessagesInput!
}

input MessageCreateManyWithoutFromInput {
  create: [MessageCreateWithoutFromInput!]
  connect: [MessageWhereUniqueInput!]
}

input MessageCreateManyWithoutToInput {
  create: [MessageCreateWithoutToInput!]
  connect: [MessageWhereUniqueInput!]
}

input MessageCreateWithoutFromInput {
  deliveredAt: DateTime!
  readAt: DateTime!
  to: UserCreateOneWithoutReceivedMessagesInput!
}

input MessageCreateWithoutToInput {
  deliveredAt: DateTime!
  readAt: DateTime!
  from: UserCreateOneWithoutSentMessagesInput!
}

"""An edge in a connection."""
type MessageEdge {
  """The item at the end of the edge."""
  node: Message!

  """A cursor for use in pagination."""
  cursor: String!
}

enum MessageOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  deliveredAt_ASC
  deliveredAt_DESC
  readAt_ASC
  readAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type MessagePreviousValues {
  id: ID!
  createdAt: DateTime!
  deliveredAt: DateTime!
  readAt: DateTime!
}

type MessageSubscriptionPayload {
  mutation: MutationType!
  node: Message
  updatedFields: [String!]
  previousValues: MessagePreviousValues
}

input MessageSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [MessageSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [MessageSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [MessageSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: MessageWhereInput
}

input MessageUpdateInput {
  deliveredAt: DateTime
  readAt: DateTime
  from: UserUpdateOneWithoutSentMessagesInput
  to: UserUpdateOneWithoutReceivedMessagesInput
}

input MessageUpdateManyWithoutFromInput {
  create: [MessageCreateWithoutFromInput!]
  connect: [MessageWhereUniqueInput!]
  disconnect: [MessageWhereUniqueInput!]
  delete: [MessageWhereUniqueInput!]
  update: [MessageUpdateWithWhereUniqueWithoutFromInput!]
  upsert: [MessageUpsertWithWhereUniqueWithoutFromInput!]
}

input MessageUpdateManyWithoutToInput {
  create: [MessageCreateWithoutToInput!]
  connect: [MessageWhereUniqueInput!]
  disconnect: [MessageWhereUniqueInput!]
  delete: [MessageWhereUniqueInput!]
  update: [MessageUpdateWithWhereUniqueWithoutToInput!]
  upsert: [MessageUpsertWithWhereUniqueWithoutToInput!]
}

input MessageUpdateWithoutFromDataInput {
  deliveredAt: DateTime
  readAt: DateTime
  to: UserUpdateOneWithoutReceivedMessagesInput
}

input MessageUpdateWithoutToDataInput {
  deliveredAt: DateTime
  readAt: DateTime
  from: UserUpdateOneWithoutSentMessagesInput
}

input MessageUpdateWithWhereUniqueWithoutFromInput {
  where: MessageWhereUniqueInput!
  data: MessageUpdateWithoutFromDataInput!
}

input MessageUpdateWithWhereUniqueWithoutToInput {
  where: MessageWhereUniqueInput!
  data: MessageUpdateWithoutToDataInput!
}

input MessageUpsertWithWhereUniqueWithoutFromInput {
  where: MessageWhereUniqueInput!
  update: MessageUpdateWithoutFromDataInput!
  create: MessageCreateWithoutFromInput!
}

input MessageUpsertWithWhereUniqueWithoutToInput {
  where: MessageWhereUniqueInput!
  update: MessageUpdateWithoutToDataInput!
  create: MessageCreateWithoutToInput!
}

input MessageWhereInput {
  """Logical AND on all given filters."""
  AND: [MessageWhereInput!]

  """Logical OR on all given filters."""
  OR: [MessageWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [MessageWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  deliveredAt: DateTime

  """All values that are not equal to given value."""
  deliveredAt_not: DateTime

  """All values that are contained in given list."""
  deliveredAt_in: [DateTime!]

  """All values that are not contained in given list."""
  deliveredAt_not_in: [DateTime!]

  """All values less than the given value."""
  deliveredAt_lt: DateTime

  """All values less than or equal the given value."""
  deliveredAt_lte: DateTime

  """All values greater than the given value."""
  deliveredAt_gt: DateTime

  """All values greater than or equal the given value."""
  deliveredAt_gte: DateTime
  readAt: DateTime

  """All values that are not equal to given value."""
  readAt_not: DateTime

  """All values that are contained in given list."""
  readAt_in: [DateTime!]

  """All values that are not contained in given list."""
  readAt_not_in: [DateTime!]

  """All values less than the given value."""
  readAt_lt: DateTime

  """All values less than or equal the given value."""
  readAt_lte: DateTime

  """All values greater than the given value."""
  readAt_gt: DateTime

  """All values greater than or equal the given value."""
  readAt_gte: DateTime
  from: UserWhereInput
  to: UserWhereInput
}

input MessageWhereUniqueInput {
  id: ID
}

type Mutation {
  createUser(data: UserCreateInput!): User!
  createPlace(data: PlaceCreateInput!): Place!
  createPricing(data: PricingCreateInput!): Pricing!
  createGuestRequirements(data: GuestRequirementsCreateInput!): GuestRequirements!
  createPolicies(data: PoliciesCreateInput!): Policies!
  createHouseRules(data: HouseRulesCreateInput!): HouseRules!
  createViews(data: ViewsCreateInput!): Views!
  createLocation(data: LocationCreateInput!): Location!
  createNeighbourhood(data: NeighbourhoodCreateInput!): Neighbourhood!
  createCity(data: CityCreateInput!): City!
  createPicture(data: PictureCreateInput!): Picture!
  createExperience(data: ExperienceCreateInput!): Experience!
  createExperienceCategory(data: ExperienceCategoryCreateInput!): ExperienceCategory!
  createAmenities(data: AmenitiesCreateInput!): Amenities!
  createReview(data: ReviewCreateInput!): Review!
  createBooking(data: BookingCreateInput!): Booking!
  createPayment(data: PaymentCreateInput!): Payment!
  createPaymentAccount(data: PaymentAccountCreateInput!): PaymentAccount!
  createPaypalInformation(data: PaypalInformationCreateInput!): PaypalInformation!
  createCreditCardInformation(data: CreditCardInformationCreateInput!): CreditCardInformation!
  createMessage(data: MessageCreateInput!): Message!
  createNotification(data: NotificationCreateInput!): Notification!
  createRestaurant(data: RestaurantCreateInput!): Restaurant!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updatePlace(data: PlaceUpdateInput!, where: PlaceWhereUniqueInput!): Place
  updatePricing(data: PricingUpdateInput!, where: PricingWhereUniqueInput!): Pricing
  updateGuestRequirements(data: GuestRequirementsUpdateInput!, where: GuestRequirementsWhereUniqueInput!): GuestRequirements
  updatePolicies(data: PoliciesUpdateInput!, where: PoliciesWhereUniqueInput!): Policies
  updateHouseRules(data: HouseRulesUpdateInput!, where: HouseRulesWhereUniqueInput!): HouseRules
  updateViews(data: ViewsUpdateInput!, where: ViewsWhereUniqueInput!): Views
  updateLocation(data: LocationUpdateInput!, where: LocationWhereUniqueInput!): Location
  updateNeighbourhood(data: NeighbourhoodUpdateInput!, where: NeighbourhoodWhereUniqueInput!): Neighbourhood
  updateCity(data: CityUpdateInput!, where: CityWhereUniqueInput!): City
  updateExperience(data: ExperienceUpdateInput!, where: ExperienceWhereUniqueInput!): Experience
  updateExperienceCategory(data: ExperienceCategoryUpdateInput!, where: ExperienceCategoryWhereUniqueInput!): ExperienceCategory
  updateAmenities(data: AmenitiesUpdateInput!, where: AmenitiesWhereUniqueInput!): Amenities
  updateReview(data: ReviewUpdateInput!, where: ReviewWhereUniqueInput!): Review
  updateBooking(data: BookingUpdateInput!, where: BookingWhereUniqueInput!): Booking
  updatePayment(data: PaymentUpdateInput!, where: PaymentWhereUniqueInput!): Payment
  updatePaymentAccount(data: PaymentAccountUpdateInput!, where: PaymentAccountWhereUniqueInput!): PaymentAccount
  updatePaypalInformation(data: PaypalInformationUpdateInput!, where: PaypalInformationWhereUniqueInput!): PaypalInformation
  updateCreditCardInformation(data: CreditCardInformationUpdateInput!, where: CreditCardInformationWhereUniqueInput!): CreditCardInformation
  updateMessage(data: MessageUpdateInput!, where: MessageWhereUniqueInput!): Message
  updateNotification(data: NotificationUpdateInput!, where: NotificationWhereUniqueInput!): Notification
  updateRestaurant(data: RestaurantUpdateInput!, where: RestaurantWhereUniqueInput!): Restaurant
  deleteUser(where: UserWhereUniqueInput!): User
  deletePlace(where: PlaceWhereUniqueInput!): Place
  deletePricing(where: PricingWhereUniqueInput!): Pricing
  deleteGuestRequirements(where: GuestRequirementsWhereUniqueInput!): GuestRequirements
  deletePolicies(where: PoliciesWhereUniqueInput!): Policies
  deleteHouseRules(where: HouseRulesWhereUniqueInput!): HouseRules
  deleteViews(where: ViewsWhereUniqueInput!): Views
  deleteLocation(where: LocationWhereUniqueInput!): Location
  deleteNeighbourhood(where: NeighbourhoodWhereUniqueInput!): Neighbourhood
  deleteCity(where: CityWhereUniqueInput!): City
  deleteExperience(where: ExperienceWhereUniqueInput!): Experience
  deleteExperienceCategory(where: ExperienceCategoryWhereUniqueInput!): ExperienceCategory
  deleteAmenities(where: AmenitiesWhereUniqueInput!): Amenities
  deleteReview(where: ReviewWhereUniqueInput!): Review
  deleteBooking(where: BookingWhereUniqueInput!): Booking
  deletePayment(where: PaymentWhereUniqueInput!): Payment
  deletePaymentAccount(where: PaymentAccountWhereUniqueInput!): PaymentAccount
  deletePaypalInformation(where: PaypalInformationWhereUniqueInput!): PaypalInformation
  deleteCreditCardInformation(where: CreditCardInformationWhereUniqueInput!): CreditCardInformation
  deleteMessage(where: MessageWhereUniqueInput!): Message
  deleteNotification(where: NotificationWhereUniqueInput!): Notification
  deleteRestaurant(where: RestaurantWhereUniqueInput!): Restaurant
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertPlace(where: PlaceWhereUniqueInput!, create: PlaceCreateInput!, update: PlaceUpdateInput!): Place!
  upsertPricing(where: PricingWhereUniqueInput!, create: PricingCreateInput!, update: PricingUpdateInput!): Pricing!
  upsertGuestRequirements(where: GuestRequirementsWhereUniqueInput!, create: GuestRequirementsCreateInput!, update: GuestRequirementsUpdateInput!): GuestRequirements!
  upsertPolicies(where: PoliciesWhereUniqueInput!, create: PoliciesCreateInput!, update: PoliciesUpdateInput!): Policies!
  upsertHouseRules(where: HouseRulesWhereUniqueInput!, create: HouseRulesCreateInput!, update: HouseRulesUpdateInput!): HouseRules!
  upsertViews(where: ViewsWhereUniqueInput!, create: ViewsCreateInput!, update: ViewsUpdateInput!): Views!
  upsertLocation(where: LocationWhereUniqueInput!, create: LocationCreateInput!, update: LocationUpdateInput!): Location!
  upsertNeighbourhood(where: NeighbourhoodWhereUniqueInput!, create: NeighbourhoodCreateInput!, update: NeighbourhoodUpdateInput!): Neighbourhood!
  upsertCity(where: CityWhereUniqueInput!, create: CityCreateInput!, update: CityUpdateInput!): City!
  upsertExperience(where: ExperienceWhereUniqueInput!, create: ExperienceCreateInput!, update: ExperienceUpdateInput!): Experience!
  upsertExperienceCategory(where: ExperienceCategoryWhereUniqueInput!, create: ExperienceCategoryCreateInput!, update: ExperienceCategoryUpdateInput!): ExperienceCategory!
  upsertAmenities(where: AmenitiesWhereUniqueInput!, create: AmenitiesCreateInput!, update: AmenitiesUpdateInput!): Amenities!
  upsertReview(where: ReviewWhereUniqueInput!, create: ReviewCreateInput!, update: ReviewUpdateInput!): Review!
  upsertBooking(where: BookingWhereUniqueInput!, create: BookingCreateInput!, update: BookingUpdateInput!): Booking!
  upsertPayment(where: PaymentWhereUniqueInput!, create: PaymentCreateInput!, update: PaymentUpdateInput!): Payment!
  upsertPaymentAccount(where: PaymentAccountWhereUniqueInput!, create: PaymentAccountCreateInput!, update: PaymentAccountUpdateInput!): PaymentAccount!
  upsertPaypalInformation(where: PaypalInformationWhereUniqueInput!, create: PaypalInformationCreateInput!, update: PaypalInformationUpdateInput!): PaypalInformation!
  upsertCreditCardInformation(where: CreditCardInformationWhereUniqueInput!, create: CreditCardInformationCreateInput!, update: CreditCardInformationUpdateInput!): CreditCardInformation!
  upsertMessage(where: MessageWhereUniqueInput!, create: MessageCreateInput!, update: MessageUpdateInput!): Message!
  upsertNotification(where: NotificationWhereUniqueInput!, create: NotificationCreateInput!, update: NotificationUpdateInput!): Notification!
  upsertRestaurant(where: RestaurantWhereUniqueInput!, create: RestaurantCreateInput!, update: RestaurantUpdateInput!): Restaurant!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManyPlaces(data: PlaceUpdateInput!, where: PlaceWhereInput): BatchPayload!
  updateManyPricings(data: PricingUpdateInput!, where: PricingWhereInput): BatchPayload!
  updateManyGuestRequirementses(data: GuestRequirementsUpdateInput!, where: GuestRequirementsWhereInput): BatchPayload!
  updateManyPolicieses(data: PoliciesUpdateInput!, where: PoliciesWhereInput): BatchPayload!
  updateManyHouseRuleses(data: HouseRulesUpdateInput!, where: HouseRulesWhereInput): BatchPayload!
  updateManyViewses(data: ViewsUpdateInput!, where: ViewsWhereInput): BatchPayload!
  updateManyLocations(data: LocationUpdateInput!, where: LocationWhereInput): BatchPayload!
  updateManyNeighbourhoods(data: NeighbourhoodUpdateInput!, where: NeighbourhoodWhereInput): BatchPayload!
  updateManyCities(data: CityUpdateInput!, where: CityWhereInput): BatchPayload!
  updateManyPictures(data: PictureUpdateInput!, where: PictureWhereInput): BatchPayload!
  updateManyExperiences(data: ExperienceUpdateInput!, where: ExperienceWhereInput): BatchPayload!
  updateManyExperienceCategories(data: ExperienceCategoryUpdateInput!, where: ExperienceCategoryWhereInput): BatchPayload!
  updateManyAmenitieses(data: AmenitiesUpdateInput!, where: AmenitiesWhereInput): BatchPayload!
  updateManyReviews(data: ReviewUpdateInput!, where: ReviewWhereInput): BatchPayload!
  updateManyBookings(data: BookingUpdateInput!, where: BookingWhereInput): BatchPayload!
  updateManyPayments(data: PaymentUpdateInput!, where: PaymentWhereInput): BatchPayload!
  updateManyPaymentAccounts(data: PaymentAccountUpdateInput!, where: PaymentAccountWhereInput): BatchPayload!
  updateManyPaypalInformations(data: PaypalInformationUpdateInput!, where: PaypalInformationWhereInput): BatchPayload!
  updateManyCreditCardInformations(data: CreditCardInformationUpdateInput!, where: CreditCardInformationWhereInput): BatchPayload!
  updateManyMessages(data: MessageUpdateInput!, where: MessageWhereInput): BatchPayload!
  updateManyNotifications(data: NotificationUpdateInput!, where: NotificationWhereInput): BatchPayload!
  updateManyRestaurants(data: RestaurantUpdateInput!, where: RestaurantWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyPlaces(where: PlaceWhereInput): BatchPayload!
  deleteManyPricings(where: PricingWhereInput): BatchPayload!
  deleteManyGuestRequirementses(where: GuestRequirementsWhereInput): BatchPayload!
  deleteManyPolicieses(where: PoliciesWhereInput): BatchPayload!
  deleteManyHouseRuleses(where: HouseRulesWhereInput): BatchPayload!
  deleteManyViewses(where: ViewsWhereInput): BatchPayload!
  deleteManyLocations(where: LocationWhereInput): BatchPayload!
  deleteManyNeighbourhoods(where: NeighbourhoodWhereInput): BatchPayload!
  deleteManyCities(where: CityWhereInput): BatchPayload!
  deleteManyPictures(where: PictureWhereInput): BatchPayload!
  deleteManyExperiences(where: ExperienceWhereInput): BatchPayload!
  deleteManyExperienceCategories(where: ExperienceCategoryWhereInput): BatchPayload!
  deleteManyAmenitieses(where: AmenitiesWhereInput): BatchPayload!
  deleteManyReviews(where: ReviewWhereInput): BatchPayload!
  deleteManyBookings(where: BookingWhereInput): BatchPayload!
  deleteManyPayments(where: PaymentWhereInput): BatchPayload!
  deleteManyPaymentAccounts(where: PaymentAccountWhereInput): BatchPayload!
  deleteManyPaypalInformations(where: PaypalInformationWhereInput): BatchPayload!
  deleteManyCreditCardInformations(where: CreditCardInformationWhereInput): BatchPayload!
  deleteManyMessages(where: MessageWhereInput): BatchPayload!
  deleteManyNotifications(where: NotificationWhereInput): BatchPayload!
  deleteManyRestaurants(where: RestaurantWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

type Neighbourhood implements Node {
  id: ID!
  locations(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Location!]
  name: String!
  slug: String!
  homePreview(where: PictureWhereInput): Picture
  city(where: CityWhereInput): City!
  featured: Boolean!
  popularity: Int!
}

"""A connection to a list of items."""
type NeighbourhoodConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [NeighbourhoodEdge]!
  aggregate: AggregateNeighbourhood!
}

input NeighbourhoodCreateInput {
  name: String!
  slug: String!
  featured: Boolean!
  popularity: Int!
  locations: LocationCreateManyWithoutNeighbourHoodInput
  homePreview: PictureCreateOneInput
  city: CityCreateOneWithoutNeighbourhoodsInput!
}

input NeighbourhoodCreateManyWithoutCityInput {
  create: [NeighbourhoodCreateWithoutCityInput!]
  connect: [NeighbourhoodWhereUniqueInput!]
}

input NeighbourhoodCreateOneWithoutLocationsInput {
  create: NeighbourhoodCreateWithoutLocationsInput
  connect: NeighbourhoodWhereUniqueInput
}

input NeighbourhoodCreateWithoutCityInput {
  name: String!
  slug: String!
  featured: Boolean!
  popularity: Int!
  locations: LocationCreateManyWithoutNeighbourHoodInput
  homePreview: PictureCreateOneInput
}

input NeighbourhoodCreateWithoutLocationsInput {
  name: String!
  slug: String!
  featured: Boolean!
  popularity: Int!
  homePreview: PictureCreateOneInput
  city: CityCreateOneWithoutNeighbourhoodsInput!
}

"""An edge in a connection."""
type NeighbourhoodEdge {
  """The item at the end of the edge."""
  node: Neighbourhood!

  """A cursor for use in pagination."""
  cursor: String!
}

enum NeighbourhoodOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  slug_ASC
  slug_DESC
  featured_ASC
  featured_DESC
  popularity_ASC
  popularity_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type NeighbourhoodPreviousValues {
  id: ID!
  name: String!
  slug: String!
  featured: Boolean!
  popularity: Int!
}

type NeighbourhoodSubscriptionPayload {
  mutation: MutationType!
  node: Neighbourhood
  updatedFields: [String!]
  previousValues: NeighbourhoodPreviousValues
}

input NeighbourhoodSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [NeighbourhoodSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [NeighbourhoodSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [NeighbourhoodSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: NeighbourhoodWhereInput
}

input NeighbourhoodUpdateInput {
  name: String
  slug: String
  featured: Boolean
  popularity: Int
  locations: LocationUpdateManyWithoutNeighbourHoodInput
  homePreview: PictureUpdateOneInput
  city: CityUpdateOneWithoutNeighbourhoodsInput
}

input NeighbourhoodUpdateManyWithoutCityInput {
  create: [NeighbourhoodCreateWithoutCityInput!]
  connect: [NeighbourhoodWhereUniqueInput!]
  disconnect: [NeighbourhoodWhereUniqueInput!]
  delete: [NeighbourhoodWhereUniqueInput!]
  update: [NeighbourhoodUpdateWithWhereUniqueWithoutCityInput!]
  upsert: [NeighbourhoodUpsertWithWhereUniqueWithoutCityInput!]
}

input NeighbourhoodUpdateOneWithoutLocationsInput {
  create: NeighbourhoodCreateWithoutLocationsInput
  connect: NeighbourhoodWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: NeighbourhoodUpdateWithoutLocationsDataInput
  upsert: NeighbourhoodUpsertWithoutLocationsInput
}

input NeighbourhoodUpdateWithoutCityDataInput {
  name: String
  slug: String
  featured: Boolean
  popularity: Int
  locations: LocationUpdateManyWithoutNeighbourHoodInput
  homePreview: PictureUpdateOneInput
}

input NeighbourhoodUpdateWithoutLocationsDataInput {
  name: String
  slug: String
  featured: Boolean
  popularity: Int
  homePreview: PictureUpdateOneInput
  city: CityUpdateOneWithoutNeighbourhoodsInput
}

input NeighbourhoodUpdateWithWhereUniqueWithoutCityInput {
  where: NeighbourhoodWhereUniqueInput!
  data: NeighbourhoodUpdateWithoutCityDataInput!
}

input NeighbourhoodUpsertWithoutLocationsInput {
  update: NeighbourhoodUpdateWithoutLocationsDataInput!
  create: NeighbourhoodCreateWithoutLocationsInput!
}

input NeighbourhoodUpsertWithWhereUniqueWithoutCityInput {
  where: NeighbourhoodWhereUniqueInput!
  update: NeighbourhoodUpdateWithoutCityDataInput!
  create: NeighbourhoodCreateWithoutCityInput!
}

input NeighbourhoodWhereInput {
  """Logical AND on all given filters."""
  AND: [NeighbourhoodWhereInput!]

  """Logical OR on all given filters."""
  OR: [NeighbourhoodWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [NeighbourhoodWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  slug: String

  """All values that are not equal to given value."""
  slug_not: String

  """All values that are contained in given list."""
  slug_in: [String!]

  """All values that are not contained in given list."""
  slug_not_in: [String!]

  """All values less than the given value."""
  slug_lt: String

  """All values less than or equal the given value."""
  slug_lte: String

  """All values greater than the given value."""
  slug_gt: String

  """All values greater than or equal the given value."""
  slug_gte: String

  """All values containing the given string."""
  slug_contains: String

  """All values not containing the given string."""
  slug_not_contains: String

  """All values starting with the given string."""
  slug_starts_with: String

  """All values not starting with the given string."""
  slug_not_starts_with: String

  """All values ending with the given string."""
  slug_ends_with: String

  """All values not ending with the given string."""
  slug_not_ends_with: String
  featured: Boolean

  """All values that are not equal to given value."""
  featured_not: Boolean
  popularity: Int

  """All values that are not equal to given value."""
  popularity_not: Int

  """All values that are contained in given list."""
  popularity_in: [Int!]

  """All values that are not contained in given list."""
  popularity_not_in: [Int!]

  """All values less than the given value."""
  popularity_lt: Int

  """All values less than or equal the given value."""
  popularity_lte: Int

  """All values greater than the given value."""
  popularity_gt: Int

  """All values greater than or equal the given value."""
  popularity_gte: Int
  locations_every: LocationWhereInput
  locations_some: LocationWhereInput
  locations_none: LocationWhereInput
  homePreview: PictureWhereInput
  city: CityWhereInput
}

input NeighbourhoodWhereUniqueInput {
  id: ID
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

type Notification implements Node {
  id: ID!
  createdAt: DateTime!
  type: NOTIFICATION_TYPE
  user(where: UserWhereInput): User!
  link: String!
  readDate: DateTime!
}

enum NOTIFICATION_TYPE {
  OFFER
  INSTANT_BOOK
  RESPONSIVENESS
  NEW_AMENITIES
  HOUSE_RULES
}

"""A connection to a list of items."""
type NotificationConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [NotificationEdge]!
  aggregate: AggregateNotification!
}

input NotificationCreateInput {
  type: NOTIFICATION_TYPE
  link: String!
  readDate: DateTime!
  user: UserCreateOneWithoutNotificationsInput!
}

input NotificationCreateManyWithoutUserInput {
  create: [NotificationCreateWithoutUserInput!]
  connect: [NotificationWhereUniqueInput!]
}

input NotificationCreateWithoutUserInput {
  type: NOTIFICATION_TYPE
  link: String!
  readDate: DateTime!
}

"""An edge in a connection."""
type NotificationEdge {
  """The item at the end of the edge."""
  node: Notification!

  """A cursor for use in pagination."""
  cursor: String!
}

enum NotificationOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  type_ASC
  type_DESC
  link_ASC
  link_DESC
  readDate_ASC
  readDate_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type NotificationPreviousValues {
  id: ID!
  createdAt: DateTime!
  type: NOTIFICATION_TYPE
  link: String!
  readDate: DateTime!
}

type NotificationSubscriptionPayload {
  mutation: MutationType!
  node: Notification
  updatedFields: [String!]
  previousValues: NotificationPreviousValues
}

input NotificationSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [NotificationSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [NotificationSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [NotificationSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: NotificationWhereInput
}

input NotificationUpdateInput {
  type: NOTIFICATION_TYPE
  link: String
  readDate: DateTime
  user: UserUpdateOneWithoutNotificationsInput
}

input NotificationUpdateManyWithoutUserInput {
  create: [NotificationCreateWithoutUserInput!]
  connect: [NotificationWhereUniqueInput!]
  disconnect: [NotificationWhereUniqueInput!]
  delete: [NotificationWhereUniqueInput!]
  update: [NotificationUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [NotificationUpsertWithWhereUniqueWithoutUserInput!]
}

input NotificationUpdateWithoutUserDataInput {
  type: NOTIFICATION_TYPE
  link: String
  readDate: DateTime
}

input NotificationUpdateWithWhereUniqueWithoutUserInput {
  where: NotificationWhereUniqueInput!
  data: NotificationUpdateWithoutUserDataInput!
}

input NotificationUpsertWithWhereUniqueWithoutUserInput {
  where: NotificationWhereUniqueInput!
  update: NotificationUpdateWithoutUserDataInput!
  create: NotificationCreateWithoutUserInput!
}

input NotificationWhereInput {
  """Logical AND on all given filters."""
  AND: [NotificationWhereInput!]

  """Logical OR on all given filters."""
  OR: [NotificationWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [NotificationWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  type: NOTIFICATION_TYPE

  """All values that are not equal to given value."""
  type_not: NOTIFICATION_TYPE

  """All values that are contained in given list."""
  type_in: [NOTIFICATION_TYPE!]

  """All values that are not contained in given list."""
  type_not_in: [NOTIFICATION_TYPE!]
  link: String

  """All values that are not equal to given value."""
  link_not: String

  """All values that are contained in given list."""
  link_in: [String!]

  """All values that are not contained in given list."""
  link_not_in: [String!]

  """All values less than the given value."""
  link_lt: String

  """All values less than or equal the given value."""
  link_lte: String

  """All values greater than the given value."""
  link_gt: String

  """All values greater than or equal the given value."""
  link_gte: String

  """All values containing the given string."""
  link_contains: String

  """All values not containing the given string."""
  link_not_contains: String

  """All values starting with the given string."""
  link_starts_with: String

  """All values not starting with the given string."""
  link_not_starts_with: String

  """All values ending with the given string."""
  link_ends_with: String

  """All values not ending with the given string."""
  link_not_ends_with: String
  readDate: DateTime

  """All values that are not equal to given value."""
  readDate_not: DateTime

  """All values that are contained in given list."""
  readDate_in: [DateTime!]

  """All values that are not contained in given list."""
  readDate_not_in: [DateTime!]

  """All values less than the given value."""
  readDate_lt: DateTime

  """All values less than or equal the given value."""
  readDate_lte: DateTime

  """All values greater than the given value."""
  readDate_gt: DateTime

  """All values greater than or equal the given value."""
  readDate_gte: DateTime
  user: UserWhereInput
}

input NotificationWhereUniqueInput {
  id: ID
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Payment implements Node {
  id: ID!
  createdAt: DateTime!
  serviceFee: Float!
  placePrice: Float!
  totalPrice: Float!
  booking(where: BookingWhereInput): Booking!
  paymentMethod(where: PaymentAccountWhereInput): PaymentAccount!
}

enum PAYMENT_PROVIDER {
  PAYPAL
  CREDIT_CARD
}

type PaymentAccount implements Node {
  id: ID!
  createdAt: DateTime!
  type: PAYMENT_PROVIDER
  user(where: UserWhereInput): User!
  payments(where: PaymentWhereInput, orderBy: PaymentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Payment!]
  paypal(where: PaypalInformationWhereInput): PaypalInformation
  creditcard(where: CreditCardInformationWhereInput): CreditCardInformation
}

"""A connection to a list of items."""
type PaymentAccountConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PaymentAccountEdge]!
  aggregate: AggregatePaymentAccount!
}

input PaymentAccountCreateInput {
  type: PAYMENT_PROVIDER
  user: UserCreateOneWithoutPaymentAccountInput!
  payments: PaymentCreateManyWithoutPaymentMethodInput
  paypal: PaypalInformationCreateOneWithoutPaymentAccountInput
  creditcard: CreditCardInformationCreateOneWithoutPaymentAccountInput
}

input PaymentAccountCreateManyWithoutUserInput {
  create: [PaymentAccountCreateWithoutUserInput!]
  connect: [PaymentAccountWhereUniqueInput!]
}

input PaymentAccountCreateOneWithoutCreditcardInput {
  create: PaymentAccountCreateWithoutCreditcardInput
  connect: PaymentAccountWhereUniqueInput
}

input PaymentAccountCreateOneWithoutPaymentsInput {
  create: PaymentAccountCreateWithoutPaymentsInput
  connect: PaymentAccountWhereUniqueInput
}

input PaymentAccountCreateOneWithoutPaypalInput {
  create: PaymentAccountCreateWithoutPaypalInput
  connect: PaymentAccountWhereUniqueInput
}

input PaymentAccountCreateWithoutCreditcardInput {
  type: PAYMENT_PROVIDER
  user: UserCreateOneWithoutPaymentAccountInput!
  payments: PaymentCreateManyWithoutPaymentMethodInput
  paypal: PaypalInformationCreateOneWithoutPaymentAccountInput
}

input PaymentAccountCreateWithoutPaymentsInput {
  type: PAYMENT_PROVIDER
  user: UserCreateOneWithoutPaymentAccountInput!
  paypal: PaypalInformationCreateOneWithoutPaymentAccountInput
  creditcard: CreditCardInformationCreateOneWithoutPaymentAccountInput
}

input PaymentAccountCreateWithoutPaypalInput {
  type: PAYMENT_PROVIDER
  user: UserCreateOneWithoutPaymentAccountInput!
  payments: PaymentCreateManyWithoutPaymentMethodInput
  creditcard: CreditCardInformationCreateOneWithoutPaymentAccountInput
}

input PaymentAccountCreateWithoutUserInput {
  type: PAYMENT_PROVIDER
  payments: PaymentCreateManyWithoutPaymentMethodInput
  paypal: PaypalInformationCreateOneWithoutPaymentAccountInput
  creditcard: CreditCardInformationCreateOneWithoutPaymentAccountInput
}

"""An edge in a connection."""
type PaymentAccountEdge {
  """The item at the end of the edge."""
  node: PaymentAccount!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PaymentAccountOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  type_ASC
  type_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PaymentAccountPreviousValues {
  id: ID!
  createdAt: DateTime!
  type: PAYMENT_PROVIDER
}

type PaymentAccountSubscriptionPayload {
  mutation: MutationType!
  node: PaymentAccount
  updatedFields: [String!]
  previousValues: PaymentAccountPreviousValues
}

input PaymentAccountSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PaymentAccountSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PaymentAccountSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PaymentAccountSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PaymentAccountWhereInput
}

input PaymentAccountUpdateInput {
  type: PAYMENT_PROVIDER
  user: UserUpdateOneWithoutPaymentAccountInput
  payments: PaymentUpdateManyWithoutPaymentMethodInput
  paypal: PaypalInformationUpdateOneWithoutPaymentAccountInput
  creditcard: CreditCardInformationUpdateOneWithoutPaymentAccountInput
}

input PaymentAccountUpdateManyWithoutUserInput {
  create: [PaymentAccountCreateWithoutUserInput!]
  connect: [PaymentAccountWhereUniqueInput!]
  disconnect: [PaymentAccountWhereUniqueInput!]
  delete: [PaymentAccountWhereUniqueInput!]
  update: [PaymentAccountUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [PaymentAccountUpsertWithWhereUniqueWithoutUserInput!]
}

input PaymentAccountUpdateOneWithoutCreditcardInput {
  create: PaymentAccountCreateWithoutCreditcardInput
  connect: PaymentAccountWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: PaymentAccountUpdateWithoutCreditcardDataInput
  upsert: PaymentAccountUpsertWithoutCreditcardInput
}

input PaymentAccountUpdateOneWithoutPaymentsInput {
  create: PaymentAccountCreateWithoutPaymentsInput
  connect: PaymentAccountWhereUniqueInput
  delete: Boolean
  update: PaymentAccountUpdateWithoutPaymentsDataInput
  upsert: PaymentAccountUpsertWithoutPaymentsInput
}

input PaymentAccountUpdateOneWithoutPaypalInput {
  create: PaymentAccountCreateWithoutPaypalInput
  connect: PaymentAccountWhereUniqueInput
  delete: Boolean
  update: PaymentAccountUpdateWithoutPaypalDataInput
  upsert: PaymentAccountUpsertWithoutPaypalInput
}

input PaymentAccountUpdateWithoutCreditcardDataInput {
  type: PAYMENT_PROVIDER
  user: UserUpdateOneWithoutPaymentAccountInput
  payments: PaymentUpdateManyWithoutPaymentMethodInput
  paypal: PaypalInformationUpdateOneWithoutPaymentAccountInput
}

input PaymentAccountUpdateWithoutPaymentsDataInput {
  type: PAYMENT_PROVIDER
  user: UserUpdateOneWithoutPaymentAccountInput
  paypal: PaypalInformationUpdateOneWithoutPaymentAccountInput
  creditcard: CreditCardInformationUpdateOneWithoutPaymentAccountInput
}

input PaymentAccountUpdateWithoutPaypalDataInput {
  type: PAYMENT_PROVIDER
  user: UserUpdateOneWithoutPaymentAccountInput
  payments: PaymentUpdateManyWithoutPaymentMethodInput
  creditcard: CreditCardInformationUpdateOneWithoutPaymentAccountInput
}

input PaymentAccountUpdateWithoutUserDataInput {
  type: PAYMENT_PROVIDER
  payments: PaymentUpdateManyWithoutPaymentMethodInput
  paypal: PaypalInformationUpdateOneWithoutPaymentAccountInput
  creditcard: CreditCardInformationUpdateOneWithoutPaymentAccountInput
}

input PaymentAccountUpdateWithWhereUniqueWithoutUserInput {
  where: PaymentAccountWhereUniqueInput!
  data: PaymentAccountUpdateWithoutUserDataInput!
}

input PaymentAccountUpsertWithoutCreditcardInput {
  update: PaymentAccountUpdateWithoutCreditcardDataInput!
  create: PaymentAccountCreateWithoutCreditcardInput!
}

input PaymentAccountUpsertWithoutPaymentsInput {
  update: PaymentAccountUpdateWithoutPaymentsDataInput!
  create: PaymentAccountCreateWithoutPaymentsInput!
}

input PaymentAccountUpsertWithoutPaypalInput {
  update: PaymentAccountUpdateWithoutPaypalDataInput!
  create: PaymentAccountCreateWithoutPaypalInput!
}

input PaymentAccountUpsertWithWhereUniqueWithoutUserInput {
  where: PaymentAccountWhereUniqueInput!
  update: PaymentAccountUpdateWithoutUserDataInput!
  create: PaymentAccountCreateWithoutUserInput!
}

input PaymentAccountWhereInput {
  """Logical AND on all given filters."""
  AND: [PaymentAccountWhereInput!]

  """Logical OR on all given filters."""
  OR: [PaymentAccountWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PaymentAccountWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  type: PAYMENT_PROVIDER

  """All values that are not equal to given value."""
  type_not: PAYMENT_PROVIDER

  """All values that are contained in given list."""
  type_in: [PAYMENT_PROVIDER!]

  """All values that are not contained in given list."""
  type_not_in: [PAYMENT_PROVIDER!]
  user: UserWhereInput
  payments_every: PaymentWhereInput
  payments_some: PaymentWhereInput
  payments_none: PaymentWhereInput
  paypal: PaypalInformationWhereInput
  creditcard: CreditCardInformationWhereInput
}

input PaymentAccountWhereUniqueInput {
  id: ID
}

"""A connection to a list of items."""
type PaymentConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PaymentEdge]!
  aggregate: AggregatePayment!
}

input PaymentCreateInput {
  serviceFee: Float!
  placePrice: Float!
  totalPrice: Float!
  booking: BookingCreateOneWithoutPaymentInput!
  paymentMethod: PaymentAccountCreateOneWithoutPaymentsInput!
}

input PaymentCreateManyWithoutPaymentMethodInput {
  create: [PaymentCreateWithoutPaymentMethodInput!]
  connect: [PaymentWhereUniqueInput!]
}

input PaymentCreateOneWithoutBookingInput {
  create: PaymentCreateWithoutBookingInput
  connect: PaymentWhereUniqueInput
}

input PaymentCreateWithoutBookingInput {
  serviceFee: Float!
  placePrice: Float!
  totalPrice: Float!
  paymentMethod: PaymentAccountCreateOneWithoutPaymentsInput!
}

input PaymentCreateWithoutPaymentMethodInput {
  serviceFee: Float!
  placePrice: Float!
  totalPrice: Float!
  booking: BookingCreateOneWithoutPaymentInput!
}

"""An edge in a connection."""
type PaymentEdge {
  """The item at the end of the edge."""
  node: Payment!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PaymentOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  serviceFee_ASC
  serviceFee_DESC
  placePrice_ASC
  placePrice_DESC
  totalPrice_ASC
  totalPrice_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PaymentPreviousValues {
  id: ID!
  createdAt: DateTime!
  serviceFee: Float!
  placePrice: Float!
  totalPrice: Float!
}

type PaymentSubscriptionPayload {
  mutation: MutationType!
  node: Payment
  updatedFields: [String!]
  previousValues: PaymentPreviousValues
}

input PaymentSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PaymentSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PaymentSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PaymentSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PaymentWhereInput
}

input PaymentUpdateInput {
  serviceFee: Float
  placePrice: Float
  totalPrice: Float
  booking: BookingUpdateOneWithoutPaymentInput
  paymentMethod: PaymentAccountUpdateOneWithoutPaymentsInput
}

input PaymentUpdateManyWithoutPaymentMethodInput {
  create: [PaymentCreateWithoutPaymentMethodInput!]
  connect: [PaymentWhereUniqueInput!]
  disconnect: [PaymentWhereUniqueInput!]
  delete: [PaymentWhereUniqueInput!]
  update: [PaymentUpdateWithWhereUniqueWithoutPaymentMethodInput!]
  upsert: [PaymentUpsertWithWhereUniqueWithoutPaymentMethodInput!]
}

input PaymentUpdateOneWithoutBookingInput {
  create: PaymentCreateWithoutBookingInput
  connect: PaymentWhereUniqueInput
  delete: Boolean
  update: PaymentUpdateWithoutBookingDataInput
  upsert: PaymentUpsertWithoutBookingInput
}

input PaymentUpdateWithoutBookingDataInput {
  serviceFee: Float
  placePrice: Float
  totalPrice: Float
  paymentMethod: PaymentAccountUpdateOneWithoutPaymentsInput
}

input PaymentUpdateWithoutPaymentMethodDataInput {
  serviceFee: Float
  placePrice: Float
  totalPrice: Float
  booking: BookingUpdateOneWithoutPaymentInput
}

input PaymentUpdateWithWhereUniqueWithoutPaymentMethodInput {
  where: PaymentWhereUniqueInput!
  data: PaymentUpdateWithoutPaymentMethodDataInput!
}

input PaymentUpsertWithoutBookingInput {
  update: PaymentUpdateWithoutBookingDataInput!
  create: PaymentCreateWithoutBookingInput!
}

input PaymentUpsertWithWhereUniqueWithoutPaymentMethodInput {
  where: PaymentWhereUniqueInput!
  update: PaymentUpdateWithoutPaymentMethodDataInput!
  create: PaymentCreateWithoutPaymentMethodInput!
}

input PaymentWhereInput {
  """Logical AND on all given filters."""
  AND: [PaymentWhereInput!]

  """Logical OR on all given filters."""
  OR: [PaymentWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PaymentWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  serviceFee: Float

  """All values that are not equal to given value."""
  serviceFee_not: Float

  """All values that are contained in given list."""
  serviceFee_in: [Float!]

  """All values that are not contained in given list."""
  serviceFee_not_in: [Float!]

  """All values less than the given value."""
  serviceFee_lt: Float

  """All values less than or equal the given value."""
  serviceFee_lte: Float

  """All values greater than the given value."""
  serviceFee_gt: Float

  """All values greater than or equal the given value."""
  serviceFee_gte: Float
  placePrice: Float

  """All values that are not equal to given value."""
  placePrice_not: Float

  """All values that are contained in given list."""
  placePrice_in: [Float!]

  """All values that are not contained in given list."""
  placePrice_not_in: [Float!]

  """All values less than the given value."""
  placePrice_lt: Float

  """All values less than or equal the given value."""
  placePrice_lte: Float

  """All values greater than the given value."""
  placePrice_gt: Float

  """All values greater than or equal the given value."""
  placePrice_gte: Float
  totalPrice: Float

  """All values that are not equal to given value."""
  totalPrice_not: Float

  """All values that are contained in given list."""
  totalPrice_in: [Float!]

  """All values that are not contained in given list."""
  totalPrice_not_in: [Float!]

  """All values less than the given value."""
  totalPrice_lt: Float

  """All values less than or equal the given value."""
  totalPrice_lte: Float

  """All values greater than the given value."""
  totalPrice_gt: Float

  """All values greater than or equal the given value."""
  totalPrice_gte: Float
  booking: BookingWhereInput
  paymentMethod: PaymentAccountWhereInput
}

input PaymentWhereUniqueInput {
  id: ID
}

type PaypalInformation implements Node {
  id: ID!
  createdAt: DateTime!
  email: String!
  paymentAccount(where: PaymentAccountWhereInput): PaymentAccount!
}

"""A connection to a list of items."""
type PaypalInformationConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PaypalInformationEdge]!
  aggregate: AggregatePaypalInformation!
}

input PaypalInformationCreateInput {
  email: String!
  paymentAccount: PaymentAccountCreateOneWithoutPaypalInput!
}

input PaypalInformationCreateOneWithoutPaymentAccountInput {
  create: PaypalInformationCreateWithoutPaymentAccountInput
  connect: PaypalInformationWhereUniqueInput
}

input PaypalInformationCreateWithoutPaymentAccountInput {
  email: String!
}

"""An edge in a connection."""
type PaypalInformationEdge {
  """The item at the end of the edge."""
  node: PaypalInformation!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PaypalInformationOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  email_ASC
  email_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PaypalInformationPreviousValues {
  id: ID!
  createdAt: DateTime!
  email: String!
}

type PaypalInformationSubscriptionPayload {
  mutation: MutationType!
  node: PaypalInformation
  updatedFields: [String!]
  previousValues: PaypalInformationPreviousValues
}

input PaypalInformationSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PaypalInformationSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PaypalInformationSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PaypalInformationSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PaypalInformationWhereInput
}

input PaypalInformationUpdateInput {
  email: String
  paymentAccount: PaymentAccountUpdateOneWithoutPaypalInput
}

input PaypalInformationUpdateOneWithoutPaymentAccountInput {
  create: PaypalInformationCreateWithoutPaymentAccountInput
  connect: PaypalInformationWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: PaypalInformationUpdateWithoutPaymentAccountDataInput
  upsert: PaypalInformationUpsertWithoutPaymentAccountInput
}

input PaypalInformationUpdateWithoutPaymentAccountDataInput {
  email: String
}

input PaypalInformationUpsertWithoutPaymentAccountInput {
  update: PaypalInformationUpdateWithoutPaymentAccountDataInput!
  create: PaypalInformationCreateWithoutPaymentAccountInput!
}

input PaypalInformationWhereInput {
  """Logical AND on all given filters."""
  AND: [PaypalInformationWhereInput!]

  """Logical OR on all given filters."""
  OR: [PaypalInformationWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PaypalInformationWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  paymentAccount: PaymentAccountWhereInput
}

input PaypalInformationWhereUniqueInput {
  id: ID
}

type Picture {
  url: String!
}

"""A connection to a list of items."""
type PictureConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PictureEdge]!
  aggregate: AggregatePicture!
}

input PictureCreateInput {
  url: String!
}

input PictureCreateManyInput {
  create: [PictureCreateInput!]
}

input PictureCreateOneInput {
  create: PictureCreateInput
}

"""An edge in a connection."""
type PictureEdge {
  """The item at the end of the edge."""
  node: Picture!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PictureOrderByInput {
  url_ASC
  url_DESC
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type PicturePreviousValues {
  url: String!
}

type PictureSubscriptionPayload {
  mutation: MutationType!
  node: Picture
  updatedFields: [String!]
  previousValues: PicturePreviousValues
}

input PictureSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PictureSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PictureSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PictureSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PictureWhereInput
}

input PictureUpdateDataInput {
  url: String
}

input PictureUpdateInput {
  url: String
}

input PictureUpdateManyInput {
  create: [PictureCreateInput!]
}

input PictureUpdateOneInput {
  create: PictureCreateInput
  disconnect: Boolean
  delete: Boolean
  update: PictureUpdateDataInput
  upsert: PictureUpsertNestedInput
}

input PictureUpsertNestedInput {
  update: PictureUpdateDataInput!
  create: PictureCreateInput!
}

input PictureWhereInput {
  """Logical AND on all given filters."""
  AND: [PictureWhereInput!]

  """Logical OR on all given filters."""
  OR: [PictureWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PictureWhereInput!]
  url: String

  """All values that are not equal to given value."""
  url_not: String

  """All values that are contained in given list."""
  url_in: [String!]

  """All values that are not contained in given list."""
  url_not_in: [String!]

  """All values less than the given value."""
  url_lt: String

  """All values less than or equal the given value."""
  url_lte: String

  """All values greater than the given value."""
  url_gt: String

  """All values greater than or equal the given value."""
  url_gte: String

  """All values containing the given string."""
  url_contains: String

  """All values not containing the given string."""
  url_not_contains: String

  """All values starting with the given string."""
  url_starts_with: String

  """All values not starting with the given string."""
  url_not_starts_with: String

  """All values ending with the given string."""
  url_ends_with: String

  """All values not ending with the given string."""
  url_not_ends_with: String
}

type Place implements Node {
  id: ID!
  name: String
  size: PLACE_SIZES
  shortDescription: String!
  description: String!
  slug: String!
  maxGuests: Int!
  numBedrooms: Int!
  numBeds: Int!
  numBaths: Int!
  reviews(where: ReviewWhereInput, orderBy: ReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Review!]
  amenities(where: AmenitiesWhereInput): Amenities!
  host(where: UserWhereInput): User!
  pricing(where: PricingWhereInput): Pricing!
  location(where: LocationWhereInput): Location!
  views(where: ViewsWhereInput): Views!
  guestRequirements(where: GuestRequirementsWhereInput): GuestRequirements
  policies(where: PoliciesWhereInput): Policies
  houseRules(where: HouseRulesWhereInput): HouseRules
  bookings(where: BookingWhereInput, orderBy: BookingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Booking!]
  pictures(where: PictureWhereInput, orderBy: PictureOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Picture!]
  popularity: Int!
}

enum PLACE_SIZES {
  ENTIRE_HOUSE
  ENTIRE_APARTMENT
  ENTIRE_EARTH_HOUSE
  ENTIRE_CABIN
  ENTIRE_VILLA
  ENTIRE_PLACE
  ENTIRE_BOAT
  PRIVATE_ROOM
}

"""A connection to a list of items."""
type PlaceConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PlaceEdge]!
  aggregate: AggregatePlace!
}

input PlaceCreateInput {
  name: String
  size: PLACE_SIZES
  shortDescription: String!
  description: String!
  slug: String!
  maxGuests: Int!
  numBedrooms: Int!
  numBeds: Int!
  numBaths: Int!
  popularity: Int!
  reviews: ReviewCreateManyWithoutPlaceInput
  amenities: AmenitiesCreateOneWithoutPlaceInput!
  host: UserCreateOneWithoutOwnedPlacesInput!
  pricing: PricingCreateOneWithoutPlaceInput!
  location: LocationCreateOneWithoutPlaceInput!
  views: ViewsCreateOneWithoutPlaceInput!
  guestRequirements: GuestRequirementsCreateOneWithoutPlaceInput
  policies: PoliciesCreateOneWithoutPlaceInput
  houseRules: HouseRulesCreateOneInput
  bookings: BookingCreateManyWithoutPlaceInput
  pictures: PictureCreateManyInput
}

input PlaceCreateManyWithoutHostInput {
  create: [PlaceCreateWithoutHostInput!]
  connect: [PlaceWhereUniqueInput!]
}

input PlaceCreateOneWithoutAmenitiesInput {
  create: PlaceCreateWithoutAmenitiesInput
  connect: PlaceWhereUniqueInput
}

input PlaceCreateOneWithoutBookingsInput {
  create: PlaceCreateWithoutBookingsInput
  connect: PlaceWhereUniqueInput
}

input PlaceCreateOneWithoutGuestRequirementsInput {
  create: PlaceCreateWithoutGuestRequirementsInput
  connect: PlaceWhereUniqueInput
}

input PlaceCreateOneWithoutLocationInput {
  create: PlaceCreateWithoutLocationInput
  connect: PlaceWhereUniqueInput
}

input PlaceCreateOneWithoutPoliciesInput {
  create: PlaceCreateWithoutPoliciesInput
  connect: PlaceWhereUniqueInput
}

input PlaceCreateOneWithoutPricingInput {
  create: PlaceCreateWithoutPricingInput
  connect: PlaceWhereUniqueInput
}

input PlaceCreateOneWithoutReviewsInput {
  create: PlaceCreateWithoutReviewsInput
  connect: PlaceWhereUniqueInput
}

input PlaceCreateOneWithoutViewsInput {
  create: PlaceCreateWithoutViewsInput
  connect: PlaceWhereUniqueInput
}

input PlaceCreateWithoutAmenitiesInput {
  name: String
  size: PLACE_SIZES
  shortDescription: String!
  description: String!
  slug: String!
  maxGuests: Int!
  numBedrooms: Int!
  numBeds: Int!
  numBaths: Int!
  popularity: Int!
  reviews: ReviewCreateManyWithoutPlaceInput
  host: UserCreateOneWithoutOwnedPlacesInput!
  pricing: PricingCreateOneWithoutPlaceInput!
  location: LocationCreateOneWithoutPlaceInput!
  views: ViewsCreateOneWithoutPlaceInput!
  guestRequirements: GuestRequirementsCreateOneWithoutPlaceInput
  policies: PoliciesCreateOneWithoutPlaceInput
  houseRules: HouseRulesCreateOneInput
  bookings: BookingCreateManyWithoutPlaceInput
  pictures: PictureCreateManyInput
}

input PlaceCreateWithoutBookingsInput {
  name: String
  size: PLACE_SIZES
  shortDescription: String!
  description: String!
  slug: String!
  maxGuests: Int!
  numBedrooms: Int!
  numBeds: Int!
  numBaths: Int!
  popularity: Int!
  reviews: ReviewCreateManyWithoutPlaceInput
  amenities: AmenitiesCreateOneWithoutPlaceInput!
  host: UserCreateOneWithoutOwnedPlacesInput!
  pricing: PricingCreateOneWithoutPlaceInput!
  location: LocationCreateOneWithoutPlaceInput!
  views: ViewsCreateOneWithoutPlaceInput!
  guestRequirements: GuestRequirementsCreateOneWithoutPlaceInput
  policies: PoliciesCreateOneWithoutPlaceInput
  houseRules: HouseRulesCreateOneInput
  pictures: PictureCreateManyInput
}

input PlaceCreateWithoutGuestRequirementsInput {
  name: String
  size: PLACE_SIZES
  shortDescription: String!
  description: String!
  slug: String!
  maxGuests: Int!
  numBedrooms: Int!
  numBeds: Int!
  numBaths: Int!
  popularity: Int!
  reviews: ReviewCreateManyWithoutPlaceInput
  amenities: AmenitiesCreateOneWithoutPlaceInput!
  host: UserCreateOneWithoutOwnedPlacesInput!
  pricing: PricingCreateOneWithoutPlaceInput!
  location: LocationCreateOneWithoutPlaceInput!
  views: ViewsCreateOneWithoutPlaceInput!
  policies: PoliciesCreateOneWithoutPlaceInput
  houseRules: HouseRulesCreateOneInput
  bookings: BookingCreateManyWithoutPlaceInput
  pictures: PictureCreateManyInput
}

input PlaceCreateWithoutHostInput {
  name: String
  size: PLACE_SIZES
  shortDescription: String!
  description: String!
  slug: String!
  maxGuests: Int!
  numBedrooms: Int!
  numBeds: Int!
  numBaths: Int!
  popularity: Int!
  reviews: ReviewCreateManyWithoutPlaceInput
  amenities: AmenitiesCreateOneWithoutPlaceInput!
  pricing: PricingCreateOneWithoutPlaceInput!
  location: LocationCreateOneWithoutPlaceInput!
  views: ViewsCreateOneWithoutPlaceInput!
  guestRequirements: GuestRequirementsCreateOneWithoutPlaceInput
  policies: PoliciesCreateOneWithoutPlaceInput
  houseRules: HouseRulesCreateOneInput
  bookings: BookingCreateManyWithoutPlaceInput
  pictures: PictureCreateManyInput
}

input PlaceCreateWithoutLocationInput {
  name: String
  size: PLACE_SIZES
  shortDescription: String!
  description: String!
  slug: String!
  maxGuests: Int!
  numBedrooms: Int!
  numBeds: Int!
  numBaths: Int!
  popularity: Int!
  reviews: ReviewCreateManyWithoutPlaceInput
  amenities: AmenitiesCreateOneWithoutPlaceInput!
  host: UserCreateOneWithoutOwnedPlacesInput!
  pricing: PricingCreateOneWithoutPlaceInput!
  views: ViewsCreateOneWithoutPlaceInput!
  guestRequirements: GuestRequirementsCreateOneWithoutPlaceInput
  policies: PoliciesCreateOneWithoutPlaceInput
  houseRules: HouseRulesCreateOneInput
  bookings: BookingCreateManyWithoutPlaceInput
  pictures: PictureCreateManyInput
}

input PlaceCreateWithoutPoliciesInput {
  name: String
  size: PLACE_SIZES
  shortDescription: String!
  description: String!
  slug: String!
  maxGuests: Int!
  numBedrooms: Int!
  numBeds: Int!
  numBaths: Int!
  popularity: Int!
  reviews: ReviewCreateManyWithoutPlaceInput
  amenities: AmenitiesCreateOneWithoutPlaceInput!
  host: UserCreateOneWithoutOwnedPlacesInput!
  pricing: PricingCreateOneWithoutPlaceInput!
  location: LocationCreateOneWithoutPlaceInput!
  views: ViewsCreateOneWithoutPlaceInput!
  guestRequirements: GuestRequirementsCreateOneWithoutPlaceInput
  houseRules: HouseRulesCreateOneInput
  bookings: BookingCreateManyWithoutPlaceInput
  pictures: PictureCreateManyInput
}

input PlaceCreateWithoutPricingInput {
  name: String
  size: PLACE_SIZES
  shortDescription: String!
  description: String!
  slug: String!
  maxGuests: Int!
  numBedrooms: Int!
  numBeds: Int!
  numBaths: Int!
  popularity: Int!
  reviews: ReviewCreateManyWithoutPlaceInput
  amenities: AmenitiesCreateOneWithoutPlaceInput!
  host: UserCreateOneWithoutOwnedPlacesInput!
  location: LocationCreateOneWithoutPlaceInput!
  views: ViewsCreateOneWithoutPlaceInput!
  guestRequirements: GuestRequirementsCreateOneWithoutPlaceInput
  policies: PoliciesCreateOneWithoutPlaceInput
  houseRules: HouseRulesCreateOneInput
  bookings: BookingCreateManyWithoutPlaceInput
  pictures: PictureCreateManyInput
}

input PlaceCreateWithoutReviewsInput {
  name: String
  size: PLACE_SIZES
  shortDescription: String!
  description: String!
  slug: String!
  maxGuests: Int!
  numBedrooms: Int!
  numBeds: Int!
  numBaths: Int!
  popularity: Int!
  amenities: AmenitiesCreateOneWithoutPlaceInput!
  host: UserCreateOneWithoutOwnedPlacesInput!
  pricing: PricingCreateOneWithoutPlaceInput!
  location: LocationCreateOneWithoutPlaceInput!
  views: ViewsCreateOneWithoutPlaceInput!
  guestRequirements: GuestRequirementsCreateOneWithoutPlaceInput
  policies: PoliciesCreateOneWithoutPlaceInput
  houseRules: HouseRulesCreateOneInput
  bookings: BookingCreateManyWithoutPlaceInput
  pictures: PictureCreateManyInput
}

input PlaceCreateWithoutViewsInput {
  name: String
  size: PLACE_SIZES
  shortDescription: String!
  description: String!
  slug: String!
  maxGuests: Int!
  numBedrooms: Int!
  numBeds: Int!
  numBaths: Int!
  popularity: Int!
  reviews: ReviewCreateManyWithoutPlaceInput
  amenities: AmenitiesCreateOneWithoutPlaceInput!
  host: UserCreateOneWithoutOwnedPlacesInput!
  pricing: PricingCreateOneWithoutPlaceInput!
  location: LocationCreateOneWithoutPlaceInput!
  guestRequirements: GuestRequirementsCreateOneWithoutPlaceInput
  policies: PoliciesCreateOneWithoutPlaceInput
  houseRules: HouseRulesCreateOneInput
  bookings: BookingCreateManyWithoutPlaceInput
  pictures: PictureCreateManyInput
}

"""An edge in a connection."""
type PlaceEdge {
  """The item at the end of the edge."""
  node: Place!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PlaceOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  size_ASC
  size_DESC
  shortDescription_ASC
  shortDescription_DESC
  description_ASC
  description_DESC
  slug_ASC
  slug_DESC
  maxGuests_ASC
  maxGuests_DESC
  numBedrooms_ASC
  numBedrooms_DESC
  numBeds_ASC
  numBeds_DESC
  numBaths_ASC
  numBaths_DESC
  popularity_ASC
  popularity_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type PlacePreviousValues {
  id: ID!
  name: String
  size: PLACE_SIZES
  shortDescription: String!
  description: String!
  slug: String!
  maxGuests: Int!
  numBedrooms: Int!
  numBeds: Int!
  numBaths: Int!
  popularity: Int!
}

type PlaceSubscriptionPayload {
  mutation: MutationType!
  node: Place
  updatedFields: [String!]
  previousValues: PlacePreviousValues
}

input PlaceSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PlaceSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PlaceSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PlaceSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PlaceWhereInput
}

input PlaceUpdateInput {
  name: String
  size: PLACE_SIZES
  shortDescription: String
  description: String
  slug: String
  maxGuests: Int
  numBedrooms: Int
  numBeds: Int
  numBaths: Int
  popularity: Int
  reviews: ReviewUpdateManyWithoutPlaceInput
  amenities: AmenitiesUpdateOneWithoutPlaceInput
  host: UserUpdateOneWithoutOwnedPlacesInput
  pricing: PricingUpdateOneWithoutPlaceInput
  location: LocationUpdateOneWithoutPlaceInput
  views: ViewsUpdateOneWithoutPlaceInput
  guestRequirements: GuestRequirementsUpdateOneWithoutPlaceInput
  policies: PoliciesUpdateOneWithoutPlaceInput
  houseRules: HouseRulesUpdateOneInput
  bookings: BookingUpdateManyWithoutPlaceInput
  pictures: PictureUpdateManyInput
}

input PlaceUpdateManyWithoutHostInput {
  create: [PlaceCreateWithoutHostInput!]
  connect: [PlaceWhereUniqueInput!]
  disconnect: [PlaceWhereUniqueInput!]
  delete: [PlaceWhereUniqueInput!]
  update: [PlaceUpdateWithWhereUniqueWithoutHostInput!]
  upsert: [PlaceUpsertWithWhereUniqueWithoutHostInput!]
}

input PlaceUpdateOneWithoutAmenitiesInput {
  create: PlaceCreateWithoutAmenitiesInput
  connect: PlaceWhereUniqueInput
  delete: Boolean
  update: PlaceUpdateWithoutAmenitiesDataInput
  upsert: PlaceUpsertWithoutAmenitiesInput
}

input PlaceUpdateOneWithoutBookingsInput {
  create: PlaceCreateWithoutBookingsInput
  connect: PlaceWhereUniqueInput
  delete: Boolean
  update: PlaceUpdateWithoutBookingsDataInput
  upsert: PlaceUpsertWithoutBookingsInput
}

input PlaceUpdateOneWithoutGuestRequirementsInput {
  create: PlaceCreateWithoutGuestRequirementsInput
  connect: PlaceWhereUniqueInput
  delete: Boolean
  update: PlaceUpdateWithoutGuestRequirementsDataInput
  upsert: PlaceUpsertWithoutGuestRequirementsInput
}

input PlaceUpdateOneWithoutLocationInput {
  create: PlaceCreateWithoutLocationInput
  connect: PlaceWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: PlaceUpdateWithoutLocationDataInput
  upsert: PlaceUpsertWithoutLocationInput
}

input PlaceUpdateOneWithoutPoliciesInput {
  create: PlaceCreateWithoutPoliciesInput
  connect: PlaceWhereUniqueInput
  delete: Boolean
  update: PlaceUpdateWithoutPoliciesDataInput
  upsert: PlaceUpsertWithoutPoliciesInput
}

input PlaceUpdateOneWithoutPricingInput {
  create: PlaceCreateWithoutPricingInput
  connect: PlaceWhereUniqueInput
  delete: Boolean
  update: PlaceUpdateWithoutPricingDataInput
  upsert: PlaceUpsertWithoutPricingInput
}

input PlaceUpdateOneWithoutReviewsInput {
  create: PlaceCreateWithoutReviewsInput
  connect: PlaceWhereUniqueInput
  delete: Boolean
  update: PlaceUpdateWithoutReviewsDataInput
  upsert: PlaceUpsertWithoutReviewsInput
}

input PlaceUpdateOneWithoutViewsInput {
  create: PlaceCreateWithoutViewsInput
  connect: PlaceWhereUniqueInput
  delete: Boolean
  update: PlaceUpdateWithoutViewsDataInput
  upsert: PlaceUpsertWithoutViewsInput
}

input PlaceUpdateWithoutAmenitiesDataInput {
  name: String
  size: PLACE_SIZES
  shortDescription: String
  description: String
  slug: String
  maxGuests: Int
  numBedrooms: Int
  numBeds: Int
  numBaths: Int
  popularity: Int
  reviews: ReviewUpdateManyWithoutPlaceInput
  host: UserUpdateOneWithoutOwnedPlacesInput
  pricing: PricingUpdateOneWithoutPlaceInput
  location: LocationUpdateOneWithoutPlaceInput
  views: ViewsUpdateOneWithoutPlaceInput
  guestRequirements: GuestRequirementsUpdateOneWithoutPlaceInput
  policies: PoliciesUpdateOneWithoutPlaceInput
  houseRules: HouseRulesUpdateOneInput
  bookings: BookingUpdateManyWithoutPlaceInput
  pictures: PictureUpdateManyInput
}

input PlaceUpdateWithoutBookingsDataInput {
  name: String
  size: PLACE_SIZES
  shortDescription: String
  description: String
  slug: String
  maxGuests: Int
  numBedrooms: Int
  numBeds: Int
  numBaths: Int
  popularity: Int
  reviews: ReviewUpdateManyWithoutPlaceInput
  amenities: AmenitiesUpdateOneWithoutPlaceInput
  host: UserUpdateOneWithoutOwnedPlacesInput
  pricing: PricingUpdateOneWithoutPlaceInput
  location: LocationUpdateOneWithoutPlaceInput
  views: ViewsUpdateOneWithoutPlaceInput
  guestRequirements: GuestRequirementsUpdateOneWithoutPlaceInput
  policies: PoliciesUpdateOneWithoutPlaceInput
  houseRules: HouseRulesUpdateOneInput
  pictures: PictureUpdateManyInput
}

input PlaceUpdateWithoutGuestRequirementsDataInput {
  name: String
  size: PLACE_SIZES
  shortDescription: String
  description: String
  slug: String
  maxGuests: Int
  numBedrooms: Int
  numBeds: Int
  numBaths: Int
  popularity: Int
  reviews: ReviewUpdateManyWithoutPlaceInput
  amenities: AmenitiesUpdateOneWithoutPlaceInput
  host: UserUpdateOneWithoutOwnedPlacesInput
  pricing: PricingUpdateOneWithoutPlaceInput
  location: LocationUpdateOneWithoutPlaceInput
  views: ViewsUpdateOneWithoutPlaceInput
  policies: PoliciesUpdateOneWithoutPlaceInput
  houseRules: HouseRulesUpdateOneInput
  bookings: BookingUpdateManyWithoutPlaceInput
  pictures: PictureUpdateManyInput
}

input PlaceUpdateWithoutHostDataInput {
  name: String
  size: PLACE_SIZES
  shortDescription: String
  description: String
  slug: String
  maxGuests: Int
  numBedrooms: Int
  numBeds: Int
  numBaths: Int
  popularity: Int
  reviews: ReviewUpdateManyWithoutPlaceInput
  amenities: AmenitiesUpdateOneWithoutPlaceInput
  pricing: PricingUpdateOneWithoutPlaceInput
  location: LocationUpdateOneWithoutPlaceInput
  views: ViewsUpdateOneWithoutPlaceInput
  guestRequirements: GuestRequirementsUpdateOneWithoutPlaceInput
  policies: PoliciesUpdateOneWithoutPlaceInput
  houseRules: HouseRulesUpdateOneInput
  bookings: BookingUpdateManyWithoutPlaceInput
  pictures: PictureUpdateManyInput
}

input PlaceUpdateWithoutLocationDataInput {
  name: String
  size: PLACE_SIZES
  shortDescription: String
  description: String
  slug: String
  maxGuests: Int
  numBedrooms: Int
  numBeds: Int
  numBaths: Int
  popularity: Int
  reviews: ReviewUpdateManyWithoutPlaceInput
  amenities: AmenitiesUpdateOneWithoutPlaceInput
  host: UserUpdateOneWithoutOwnedPlacesInput
  pricing: PricingUpdateOneWithoutPlaceInput
  views: ViewsUpdateOneWithoutPlaceInput
  guestRequirements: GuestRequirementsUpdateOneWithoutPlaceInput
  policies: PoliciesUpdateOneWithoutPlaceInput
  houseRules: HouseRulesUpdateOneInput
  bookings: BookingUpdateManyWithoutPlaceInput
  pictures: PictureUpdateManyInput
}

input PlaceUpdateWithoutPoliciesDataInput {
  name: String
  size: PLACE_SIZES
  shortDescription: String
  description: String
  slug: String
  maxGuests: Int
  numBedrooms: Int
  numBeds: Int
  numBaths: Int
  popularity: Int
  reviews: ReviewUpdateManyWithoutPlaceInput
  amenities: AmenitiesUpdateOneWithoutPlaceInput
  host: UserUpdateOneWithoutOwnedPlacesInput
  pricing: PricingUpdateOneWithoutPlaceInput
  location: LocationUpdateOneWithoutPlaceInput
  views: ViewsUpdateOneWithoutPlaceInput
  guestRequirements: GuestRequirementsUpdateOneWithoutPlaceInput
  houseRules: HouseRulesUpdateOneInput
  bookings: BookingUpdateManyWithoutPlaceInput
  pictures: PictureUpdateManyInput
}

input PlaceUpdateWithoutPricingDataInput {
  name: String
  size: PLACE_SIZES
  shortDescription: String
  description: String
  slug: String
  maxGuests: Int
  numBedrooms: Int
  numBeds: Int
  numBaths: Int
  popularity: Int
  reviews: ReviewUpdateManyWithoutPlaceInput
  amenities: AmenitiesUpdateOneWithoutPlaceInput
  host: UserUpdateOneWithoutOwnedPlacesInput
  location: LocationUpdateOneWithoutPlaceInput
  views: ViewsUpdateOneWithoutPlaceInput
  guestRequirements: GuestRequirementsUpdateOneWithoutPlaceInput
  policies: PoliciesUpdateOneWithoutPlaceInput
  houseRules: HouseRulesUpdateOneInput
  bookings: BookingUpdateManyWithoutPlaceInput
  pictures: PictureUpdateManyInput
}

input PlaceUpdateWithoutReviewsDataInput {
  name: String
  size: PLACE_SIZES
  shortDescription: String
  description: String
  slug: String
  maxGuests: Int
  numBedrooms: Int
  numBeds: Int
  numBaths: Int
  popularity: Int
  amenities: AmenitiesUpdateOneWithoutPlaceInput
  host: UserUpdateOneWithoutOwnedPlacesInput
  pricing: PricingUpdateOneWithoutPlaceInput
  location: LocationUpdateOneWithoutPlaceInput
  views: ViewsUpdateOneWithoutPlaceInput
  guestRequirements: GuestRequirementsUpdateOneWithoutPlaceInput
  policies: PoliciesUpdateOneWithoutPlaceInput
  houseRules: HouseRulesUpdateOneInput
  bookings: BookingUpdateManyWithoutPlaceInput
  pictures: PictureUpdateManyInput
}

input PlaceUpdateWithoutViewsDataInput {
  name: String
  size: PLACE_SIZES
  shortDescription: String
  description: String
  slug: String
  maxGuests: Int
  numBedrooms: Int
  numBeds: Int
  numBaths: Int
  popularity: Int
  reviews: ReviewUpdateManyWithoutPlaceInput
  amenities: AmenitiesUpdateOneWithoutPlaceInput
  host: UserUpdateOneWithoutOwnedPlacesInput
  pricing: PricingUpdateOneWithoutPlaceInput
  location: LocationUpdateOneWithoutPlaceInput
  guestRequirements: GuestRequirementsUpdateOneWithoutPlaceInput
  policies: PoliciesUpdateOneWithoutPlaceInput
  houseRules: HouseRulesUpdateOneInput
  bookings: BookingUpdateManyWithoutPlaceInput
  pictures: PictureUpdateManyInput
}

input PlaceUpdateWithWhereUniqueWithoutHostInput {
  where: PlaceWhereUniqueInput!
  data: PlaceUpdateWithoutHostDataInput!
}

input PlaceUpsertWithoutAmenitiesInput {
  update: PlaceUpdateWithoutAmenitiesDataInput!
  create: PlaceCreateWithoutAmenitiesInput!
}

input PlaceUpsertWithoutBookingsInput {
  update: PlaceUpdateWithoutBookingsDataInput!
  create: PlaceCreateWithoutBookingsInput!
}

input PlaceUpsertWithoutGuestRequirementsInput {
  update: PlaceUpdateWithoutGuestRequirementsDataInput!
  create: PlaceCreateWithoutGuestRequirementsInput!
}

input PlaceUpsertWithoutLocationInput {
  update: PlaceUpdateWithoutLocationDataInput!
  create: PlaceCreateWithoutLocationInput!
}

input PlaceUpsertWithoutPoliciesInput {
  update: PlaceUpdateWithoutPoliciesDataInput!
  create: PlaceCreateWithoutPoliciesInput!
}

input PlaceUpsertWithoutPricingInput {
  update: PlaceUpdateWithoutPricingDataInput!
  create: PlaceCreateWithoutPricingInput!
}

input PlaceUpsertWithoutReviewsInput {
  update: PlaceUpdateWithoutReviewsDataInput!
  create: PlaceCreateWithoutReviewsInput!
}

input PlaceUpsertWithoutViewsInput {
  update: PlaceUpdateWithoutViewsDataInput!
  create: PlaceCreateWithoutViewsInput!
}

input PlaceUpsertWithWhereUniqueWithoutHostInput {
  where: PlaceWhereUniqueInput!
  update: PlaceUpdateWithoutHostDataInput!
  create: PlaceCreateWithoutHostInput!
}

input PlaceWhereInput {
  """Logical AND on all given filters."""
  AND: [PlaceWhereInput!]

  """Logical OR on all given filters."""
  OR: [PlaceWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PlaceWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  size: PLACE_SIZES

  """All values that are not equal to given value."""
  size_not: PLACE_SIZES

  """All values that are contained in given list."""
  size_in: [PLACE_SIZES!]

  """All values that are not contained in given list."""
  size_not_in: [PLACE_SIZES!]
  shortDescription: String

  """All values that are not equal to given value."""
  shortDescription_not: String

  """All values that are contained in given list."""
  shortDescription_in: [String!]

  """All values that are not contained in given list."""
  shortDescription_not_in: [String!]

  """All values less than the given value."""
  shortDescription_lt: String

  """All values less than or equal the given value."""
  shortDescription_lte: String

  """All values greater than the given value."""
  shortDescription_gt: String

  """All values greater than or equal the given value."""
  shortDescription_gte: String

  """All values containing the given string."""
  shortDescription_contains: String

  """All values not containing the given string."""
  shortDescription_not_contains: String

  """All values starting with the given string."""
  shortDescription_starts_with: String

  """All values not starting with the given string."""
  shortDescription_not_starts_with: String

  """All values ending with the given string."""
  shortDescription_ends_with: String

  """All values not ending with the given string."""
  shortDescription_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  slug: String

  """All values that are not equal to given value."""
  slug_not: String

  """All values that are contained in given list."""
  slug_in: [String!]

  """All values that are not contained in given list."""
  slug_not_in: [String!]

  """All values less than the given value."""
  slug_lt: String

  """All values less than or equal the given value."""
  slug_lte: String

  """All values greater than the given value."""
  slug_gt: String

  """All values greater than or equal the given value."""
  slug_gte: String

  """All values containing the given string."""
  slug_contains: String

  """All values not containing the given string."""
  slug_not_contains: String

  """All values starting with the given string."""
  slug_starts_with: String

  """All values not starting with the given string."""
  slug_not_starts_with: String

  """All values ending with the given string."""
  slug_ends_with: String

  """All values not ending with the given string."""
  slug_not_ends_with: String
  maxGuests: Int

  """All values that are not equal to given value."""
  maxGuests_not: Int

  """All values that are contained in given list."""
  maxGuests_in: [Int!]

  """All values that are not contained in given list."""
  maxGuests_not_in: [Int!]

  """All values less than the given value."""
  maxGuests_lt: Int

  """All values less than or equal the given value."""
  maxGuests_lte: Int

  """All values greater than the given value."""
  maxGuests_gt: Int

  """All values greater than or equal the given value."""
  maxGuests_gte: Int
  numBedrooms: Int

  """All values that are not equal to given value."""
  numBedrooms_not: Int

  """All values that are contained in given list."""
  numBedrooms_in: [Int!]

  """All values that are not contained in given list."""
  numBedrooms_not_in: [Int!]

  """All values less than the given value."""
  numBedrooms_lt: Int

  """All values less than or equal the given value."""
  numBedrooms_lte: Int

  """All values greater than the given value."""
  numBedrooms_gt: Int

  """All values greater than or equal the given value."""
  numBedrooms_gte: Int
  numBeds: Int

  """All values that are not equal to given value."""
  numBeds_not: Int

  """All values that are contained in given list."""
  numBeds_in: [Int!]

  """All values that are not contained in given list."""
  numBeds_not_in: [Int!]

  """All values less than the given value."""
  numBeds_lt: Int

  """All values less than or equal the given value."""
  numBeds_lte: Int

  """All values greater than the given value."""
  numBeds_gt: Int

  """All values greater than or equal the given value."""
  numBeds_gte: Int
  numBaths: Int

  """All values that are not equal to given value."""
  numBaths_not: Int

  """All values that are contained in given list."""
  numBaths_in: [Int!]

  """All values that are not contained in given list."""
  numBaths_not_in: [Int!]

  """All values less than the given value."""
  numBaths_lt: Int

  """All values less than or equal the given value."""
  numBaths_lte: Int

  """All values greater than the given value."""
  numBaths_gt: Int

  """All values greater than or equal the given value."""
  numBaths_gte: Int
  popularity: Int

  """All values that are not equal to given value."""
  popularity_not: Int

  """All values that are contained in given list."""
  popularity_in: [Int!]

  """All values that are not contained in given list."""
  popularity_not_in: [Int!]

  """All values less than the given value."""
  popularity_lt: Int

  """All values less than or equal the given value."""
  popularity_lte: Int

  """All values greater than the given value."""
  popularity_gt: Int

  """All values greater than or equal the given value."""
  popularity_gte: Int
  reviews_every: ReviewWhereInput
  reviews_some: ReviewWhereInput
  reviews_none: ReviewWhereInput
  amenities: AmenitiesWhereInput
  host: UserWhereInput
  pricing: PricingWhereInput
  location: LocationWhereInput
  views: ViewsWhereInput
  guestRequirements: GuestRequirementsWhereInput
  policies: PoliciesWhereInput
  houseRules: HouseRulesWhereInput
  bookings_every: BookingWhereInput
  bookings_some: BookingWhereInput
  bookings_none: BookingWhereInput
  pictures_every: PictureWhereInput
  pictures_some: PictureWhereInput
  pictures_none: PictureWhereInput
}

input PlaceWhereUniqueInput {
  id: ID
}

type Policies implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  checkInStartTime: Float!
  checkInEndTime: Float!
  checkoutTime: Float!
  place(where: PlaceWhereInput): Place!
}

"""A connection to a list of items."""
type PoliciesConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PoliciesEdge]!
  aggregate: AggregatePolicies!
}

input PoliciesCreateInput {
  checkInStartTime: Float!
  checkInEndTime: Float!
  checkoutTime: Float!
  place: PlaceCreateOneWithoutPoliciesInput!
}

input PoliciesCreateOneWithoutPlaceInput {
  create: PoliciesCreateWithoutPlaceInput
  connect: PoliciesWhereUniqueInput
}

input PoliciesCreateWithoutPlaceInput {
  checkInStartTime: Float!
  checkInEndTime: Float!
  checkoutTime: Float!
}

"""An edge in a connection."""
type PoliciesEdge {
  """The item at the end of the edge."""
  node: Policies!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PoliciesOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  checkInStartTime_ASC
  checkInStartTime_DESC
  checkInEndTime_ASC
  checkInEndTime_DESC
  checkoutTime_ASC
  checkoutTime_DESC
}

type PoliciesPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  checkInStartTime: Float!
  checkInEndTime: Float!
  checkoutTime: Float!
}

type PoliciesSubscriptionPayload {
  mutation: MutationType!
  node: Policies
  updatedFields: [String!]
  previousValues: PoliciesPreviousValues
}

input PoliciesSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PoliciesSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PoliciesSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PoliciesSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PoliciesWhereInput
}

input PoliciesUpdateInput {
  checkInStartTime: Float
  checkInEndTime: Float
  checkoutTime: Float
  place: PlaceUpdateOneWithoutPoliciesInput
}

input PoliciesUpdateOneWithoutPlaceInput {
  create: PoliciesCreateWithoutPlaceInput
  connect: PoliciesWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: PoliciesUpdateWithoutPlaceDataInput
  upsert: PoliciesUpsertWithoutPlaceInput
}

input PoliciesUpdateWithoutPlaceDataInput {
  checkInStartTime: Float
  checkInEndTime: Float
  checkoutTime: Float
}

input PoliciesUpsertWithoutPlaceInput {
  update: PoliciesUpdateWithoutPlaceDataInput!
  create: PoliciesCreateWithoutPlaceInput!
}

input PoliciesWhereInput {
  """Logical AND on all given filters."""
  AND: [PoliciesWhereInput!]

  """Logical OR on all given filters."""
  OR: [PoliciesWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PoliciesWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  checkInStartTime: Float

  """All values that are not equal to given value."""
  checkInStartTime_not: Float

  """All values that are contained in given list."""
  checkInStartTime_in: [Float!]

  """All values that are not contained in given list."""
  checkInStartTime_not_in: [Float!]

  """All values less than the given value."""
  checkInStartTime_lt: Float

  """All values less than or equal the given value."""
  checkInStartTime_lte: Float

  """All values greater than the given value."""
  checkInStartTime_gt: Float

  """All values greater than or equal the given value."""
  checkInStartTime_gte: Float
  checkInEndTime: Float

  """All values that are not equal to given value."""
  checkInEndTime_not: Float

  """All values that are contained in given list."""
  checkInEndTime_in: [Float!]

  """All values that are not contained in given list."""
  checkInEndTime_not_in: [Float!]

  """All values less than the given value."""
  checkInEndTime_lt: Float

  """All values less than or equal the given value."""
  checkInEndTime_lte: Float

  """All values greater than the given value."""
  checkInEndTime_gt: Float

  """All values greater than or equal the given value."""
  checkInEndTime_gte: Float
  checkoutTime: Float

  """All values that are not equal to given value."""
  checkoutTime_not: Float

  """All values that are contained in given list."""
  checkoutTime_in: [Float!]

  """All values that are not contained in given list."""
  checkoutTime_not_in: [Float!]

  """All values less than the given value."""
  checkoutTime_lt: Float

  """All values less than or equal the given value."""
  checkoutTime_lte: Float

  """All values greater than the given value."""
  checkoutTime_gt: Float

  """All values greater than or equal the given value."""
  checkoutTime_gte: Float
  place: PlaceWhereInput
}

input PoliciesWhereUniqueInput {
  id: ID
}

type Pricing implements Node {
  id: ID!
  place(where: PlaceWhereInput): Place!
  monthlyDiscount: Int
  weeklyDiscount: Int
  perNight: Int!
  smartPricing: Boolean!
  basePrice: Int!
  averageWeekly: Int!
  averageMonthly: Int!
  cleaningFee: Int
  securityDeposit: Int
  extraGuests: Int
  weekendPricing: Int
  currency: CURRENCY
}

"""A connection to a list of items."""
type PricingConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PricingEdge]!
  aggregate: AggregatePricing!
}

input PricingCreateInput {
  monthlyDiscount: Int
  weeklyDiscount: Int
  perNight: Int!
  smartPricing: Boolean
  basePrice: Int!
  averageWeekly: Int!
  averageMonthly: Int!
  cleaningFee: Int
  securityDeposit: Int
  extraGuests: Int
  weekendPricing: Int
  currency: CURRENCY
  place: PlaceCreateOneWithoutPricingInput!
}

input PricingCreateOneWithoutPlaceInput {
  create: PricingCreateWithoutPlaceInput
  connect: PricingWhereUniqueInput
}

input PricingCreateWithoutPlaceInput {
  monthlyDiscount: Int
  weeklyDiscount: Int
  perNight: Int!
  smartPricing: Boolean
  basePrice: Int!
  averageWeekly: Int!
  averageMonthly: Int!
  cleaningFee: Int
  securityDeposit: Int
  extraGuests: Int
  weekendPricing: Int
  currency: CURRENCY
}

"""An edge in a connection."""
type PricingEdge {
  """The item at the end of the edge."""
  node: Pricing!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PricingOrderByInput {
  id_ASC
  id_DESC
  monthlyDiscount_ASC
  monthlyDiscount_DESC
  weeklyDiscount_ASC
  weeklyDiscount_DESC
  perNight_ASC
  perNight_DESC
  smartPricing_ASC
  smartPricing_DESC
  basePrice_ASC
  basePrice_DESC
  averageWeekly_ASC
  averageWeekly_DESC
  averageMonthly_ASC
  averageMonthly_DESC
  cleaningFee_ASC
  cleaningFee_DESC
  securityDeposit_ASC
  securityDeposit_DESC
  extraGuests_ASC
  extraGuests_DESC
  weekendPricing_ASC
  weekendPricing_DESC
  currency_ASC
  currency_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type PricingPreviousValues {
  id: ID!
  monthlyDiscount: Int
  weeklyDiscount: Int
  perNight: Int!
  smartPricing: Boolean!
  basePrice: Int!
  averageWeekly: Int!
  averageMonthly: Int!
  cleaningFee: Int
  securityDeposit: Int
  extraGuests: Int
  weekendPricing: Int
  currency: CURRENCY
}

type PricingSubscriptionPayload {
  mutation: MutationType!
  node: Pricing
  updatedFields: [String!]
  previousValues: PricingPreviousValues
}

input PricingSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PricingSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PricingSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PricingSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PricingWhereInput
}

input PricingUpdateInput {
  monthlyDiscount: Int
  weeklyDiscount: Int
  perNight: Int
  smartPricing: Boolean
  basePrice: Int
  averageWeekly: Int
  averageMonthly: Int
  cleaningFee: Int
  securityDeposit: Int
  extraGuests: Int
  weekendPricing: Int
  currency: CURRENCY
  place: PlaceUpdateOneWithoutPricingInput
}

input PricingUpdateOneWithoutPlaceInput {
  create: PricingCreateWithoutPlaceInput
  connect: PricingWhereUniqueInput
  delete: Boolean
  update: PricingUpdateWithoutPlaceDataInput
  upsert: PricingUpsertWithoutPlaceInput
}

input PricingUpdateWithoutPlaceDataInput {
  monthlyDiscount: Int
  weeklyDiscount: Int
  perNight: Int
  smartPricing: Boolean
  basePrice: Int
  averageWeekly: Int
  averageMonthly: Int
  cleaningFee: Int
  securityDeposit: Int
  extraGuests: Int
  weekendPricing: Int
  currency: CURRENCY
}

input PricingUpsertWithoutPlaceInput {
  update: PricingUpdateWithoutPlaceDataInput!
  create: PricingCreateWithoutPlaceInput!
}

input PricingWhereInput {
  """Logical AND on all given filters."""
  AND: [PricingWhereInput!]

  """Logical OR on all given filters."""
  OR: [PricingWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PricingWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  monthlyDiscount: Int

  """All values that are not equal to given value."""
  monthlyDiscount_not: Int

  """All values that are contained in given list."""
  monthlyDiscount_in: [Int!]

  """All values that are not contained in given list."""
  monthlyDiscount_not_in: [Int!]

  """All values less than the given value."""
  monthlyDiscount_lt: Int

  """All values less than or equal the given value."""
  monthlyDiscount_lte: Int

  """All values greater than the given value."""
  monthlyDiscount_gt: Int

  """All values greater than or equal the given value."""
  monthlyDiscount_gte: Int
  weeklyDiscount: Int

  """All values that are not equal to given value."""
  weeklyDiscount_not: Int

  """All values that are contained in given list."""
  weeklyDiscount_in: [Int!]

  """All values that are not contained in given list."""
  weeklyDiscount_not_in: [Int!]

  """All values less than the given value."""
  weeklyDiscount_lt: Int

  """All values less than or equal the given value."""
  weeklyDiscount_lte: Int

  """All values greater than the given value."""
  weeklyDiscount_gt: Int

  """All values greater than or equal the given value."""
  weeklyDiscount_gte: Int
  perNight: Int

  """All values that are not equal to given value."""
  perNight_not: Int

  """All values that are contained in given list."""
  perNight_in: [Int!]

  """All values that are not contained in given list."""
  perNight_not_in: [Int!]

  """All values less than the given value."""
  perNight_lt: Int

  """All values less than or equal the given value."""
  perNight_lte: Int

  """All values greater than the given value."""
  perNight_gt: Int

  """All values greater than or equal the given value."""
  perNight_gte: Int
  smartPricing: Boolean

  """All values that are not equal to given value."""
  smartPricing_not: Boolean
  basePrice: Int

  """All values that are not equal to given value."""
  basePrice_not: Int

  """All values that are contained in given list."""
  basePrice_in: [Int!]

  """All values that are not contained in given list."""
  basePrice_not_in: [Int!]

  """All values less than the given value."""
  basePrice_lt: Int

  """All values less than or equal the given value."""
  basePrice_lte: Int

  """All values greater than the given value."""
  basePrice_gt: Int

  """All values greater than or equal the given value."""
  basePrice_gte: Int
  averageWeekly: Int

  """All values that are not equal to given value."""
  averageWeekly_not: Int

  """All values that are contained in given list."""
  averageWeekly_in: [Int!]

  """All values that are not contained in given list."""
  averageWeekly_not_in: [Int!]

  """All values less than the given value."""
  averageWeekly_lt: Int

  """All values less than or equal the given value."""
  averageWeekly_lte: Int

  """All values greater than the given value."""
  averageWeekly_gt: Int

  """All values greater than or equal the given value."""
  averageWeekly_gte: Int
  averageMonthly: Int

  """All values that are not equal to given value."""
  averageMonthly_not: Int

  """All values that are contained in given list."""
  averageMonthly_in: [Int!]

  """All values that are not contained in given list."""
  averageMonthly_not_in: [Int!]

  """All values less than the given value."""
  averageMonthly_lt: Int

  """All values less than or equal the given value."""
  averageMonthly_lte: Int

  """All values greater than the given value."""
  averageMonthly_gt: Int

  """All values greater than or equal the given value."""
  averageMonthly_gte: Int
  cleaningFee: Int

  """All values that are not equal to given value."""
  cleaningFee_not: Int

  """All values that are contained in given list."""
  cleaningFee_in: [Int!]

  """All values that are not contained in given list."""
  cleaningFee_not_in: [Int!]

  """All values less than the given value."""
  cleaningFee_lt: Int

  """All values less than or equal the given value."""
  cleaningFee_lte: Int

  """All values greater than the given value."""
  cleaningFee_gt: Int

  """All values greater than or equal the given value."""
  cleaningFee_gte: Int
  securityDeposit: Int

  """All values that are not equal to given value."""
  securityDeposit_not: Int

  """All values that are contained in given list."""
  securityDeposit_in: [Int!]

  """All values that are not contained in given list."""
  securityDeposit_not_in: [Int!]

  """All values less than the given value."""
  securityDeposit_lt: Int

  """All values less than or equal the given value."""
  securityDeposit_lte: Int

  """All values greater than the given value."""
  securityDeposit_gt: Int

  """All values greater than or equal the given value."""
  securityDeposit_gte: Int
  extraGuests: Int

  """All values that are not equal to given value."""
  extraGuests_not: Int

  """All values that are contained in given list."""
  extraGuests_in: [Int!]

  """All values that are not contained in given list."""
  extraGuests_not_in: [Int!]

  """All values less than the given value."""
  extraGuests_lt: Int

  """All values less than or equal the given value."""
  extraGuests_lte: Int

  """All values greater than the given value."""
  extraGuests_gt: Int

  """All values greater than or equal the given value."""
  extraGuests_gte: Int
  weekendPricing: Int

  """All values that are not equal to given value."""
  weekendPricing_not: Int

  """All values that are contained in given list."""
  weekendPricing_in: [Int!]

  """All values that are not contained in given list."""
  weekendPricing_not_in: [Int!]

  """All values less than the given value."""
  weekendPricing_lt: Int

  """All values less than or equal the given value."""
  weekendPricing_lte: Int

  """All values greater than the given value."""
  weekendPricing_gt: Int

  """All values greater than or equal the given value."""
  weekendPricing_gte: Int
  currency: CURRENCY

  """All values that are not equal to given value."""
  currency_not: CURRENCY

  """All values that are contained in given list."""
  currency_in: [CURRENCY!]

  """All values that are not contained in given list."""
  currency_not_in: [CURRENCY!]
  place: PlaceWhereInput
}

input PricingWhereUniqueInput {
  id: ID
}

type Query {
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  places(where: PlaceWhereInput, orderBy: PlaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Place]!
  pricings(where: PricingWhereInput, orderBy: PricingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Pricing]!
  guestRequirementses(where: GuestRequirementsWhereInput, orderBy: GuestRequirementsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GuestRequirements]!
  policieses(where: PoliciesWhereInput, orderBy: PoliciesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Policies]!
  houseRuleses(where: HouseRulesWhereInput, orderBy: HouseRulesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [HouseRules]!
  viewses(where: ViewsWhereInput, orderBy: ViewsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Views]!
  locations(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Location]!
  neighbourhoods(where: NeighbourhoodWhereInput, orderBy: NeighbourhoodOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Neighbourhood]!
  cities(where: CityWhereInput, orderBy: CityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [City]!
  pictures(where: PictureWhereInput, orderBy: PictureOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Picture]!
  experiences(where: ExperienceWhereInput, orderBy: ExperienceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Experience]!
  experienceCategories(where: ExperienceCategoryWhereInput, orderBy: ExperienceCategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ExperienceCategory]!
  amenitieses(where: AmenitiesWhereInput, orderBy: AmenitiesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Amenities]!
  reviews(where: ReviewWhereInput, orderBy: ReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Review]!
  bookings(where: BookingWhereInput, orderBy: BookingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Booking]!
  payments(where: PaymentWhereInput, orderBy: PaymentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Payment]!
  paymentAccounts(where: PaymentAccountWhereInput, orderBy: PaymentAccountOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PaymentAccount]!
  paypalInformations(where: PaypalInformationWhereInput, orderBy: PaypalInformationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PaypalInformation]!
  creditCardInformations(where: CreditCardInformationWhereInput, orderBy: CreditCardInformationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CreditCardInformation]!
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message]!
  notifications(where: NotificationWhereInput, orderBy: NotificationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Notification]!
  restaurants(where: RestaurantWhereInput, orderBy: RestaurantOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Restaurant]!
  user(where: UserWhereUniqueInput!): User
  place(where: PlaceWhereUniqueInput!): Place
  pricing(where: PricingWhereUniqueInput!): Pricing
  guestRequirements(where: GuestRequirementsWhereUniqueInput!): GuestRequirements
  policies(where: PoliciesWhereUniqueInput!): Policies
  houseRules(where: HouseRulesWhereUniqueInput!): HouseRules
  views(where: ViewsWhereUniqueInput!): Views
  location(where: LocationWhereUniqueInput!): Location
  neighbourhood(where: NeighbourhoodWhereUniqueInput!): Neighbourhood
  city(where: CityWhereUniqueInput!): City
  experience(where: ExperienceWhereUniqueInput!): Experience
  experienceCategory(where: ExperienceCategoryWhereUniqueInput!): ExperienceCategory
  amenities(where: AmenitiesWhereUniqueInput!): Amenities
  review(where: ReviewWhereUniqueInput!): Review
  booking(where: BookingWhereUniqueInput!): Booking
  payment(where: PaymentWhereUniqueInput!): Payment
  paymentAccount(where: PaymentAccountWhereUniqueInput!): PaymentAccount
  paypalInformation(where: PaypalInformationWhereUniqueInput!): PaypalInformation
  creditCardInformation(where: CreditCardInformationWhereUniqueInput!): CreditCardInformation
  message(where: MessageWhereUniqueInput!): Message
  notification(where: NotificationWhereUniqueInput!): Notification
  restaurant(where: RestaurantWhereUniqueInput!): Restaurant
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  placesConnection(where: PlaceWhereInput, orderBy: PlaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PlaceConnection!
  pricingsConnection(where: PricingWhereInput, orderBy: PricingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PricingConnection!
  guestRequirementsesConnection(where: GuestRequirementsWhereInput, orderBy: GuestRequirementsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GuestRequirementsConnection!
  policiesesConnection(where: PoliciesWhereInput, orderBy: PoliciesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PoliciesConnection!
  houseRulesesConnection(where: HouseRulesWhereInput, orderBy: HouseRulesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): HouseRulesConnection!
  viewsesConnection(where: ViewsWhereInput, orderBy: ViewsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ViewsConnection!
  locationsConnection(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LocationConnection!
  neighbourhoodsConnection(where: NeighbourhoodWhereInput, orderBy: NeighbourhoodOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): NeighbourhoodConnection!
  citiesConnection(where: CityWhereInput, orderBy: CityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CityConnection!
  picturesConnection(where: PictureWhereInput, orderBy: PictureOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PictureConnection!
  experiencesConnection(where: ExperienceWhereInput, orderBy: ExperienceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ExperienceConnection!
  experienceCategoriesConnection(where: ExperienceCategoryWhereInput, orderBy: ExperienceCategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ExperienceCategoryConnection!
  amenitiesesConnection(where: AmenitiesWhereInput, orderBy: AmenitiesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AmenitiesConnection!
  reviewsConnection(where: ReviewWhereInput, orderBy: ReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ReviewConnection!
  bookingsConnection(where: BookingWhereInput, orderBy: BookingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BookingConnection!
  paymentsConnection(where: PaymentWhereInput, orderBy: PaymentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PaymentConnection!
  paymentAccountsConnection(where: PaymentAccountWhereInput, orderBy: PaymentAccountOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PaymentAccountConnection!
  paypalInformationsConnection(where: PaypalInformationWhereInput, orderBy: PaypalInformationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PaypalInformationConnection!
  creditCardInformationsConnection(where: CreditCardInformationWhereInput, orderBy: CreditCardInformationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CreditCardInformationConnection!
  messagesConnection(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MessageConnection!
  notificationsConnection(where: NotificationWhereInput, orderBy: NotificationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): NotificationConnection!
  restaurantsConnection(where: RestaurantWhereInput, orderBy: RestaurantOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RestaurantConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Restaurant implements Node {
  id: ID!
  createdAt: DateTime!
  title: String!
  avgPricePerPerson: Int!
  pictures(where: PictureWhereInput, orderBy: PictureOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Picture!]
  location(where: LocationWhereInput): Location!
  isCurated: Boolean!
  slug: String!
  popularity: Int!
}

"""A connection to a list of items."""
type RestaurantConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [RestaurantEdge]!
  aggregate: AggregateRestaurant!
}

input RestaurantCreateInput {
  title: String!
  avgPricePerPerson: Int!
  isCurated: Boolean
  slug: String!
  popularity: Int!
  pictures: PictureCreateManyInput
  location: LocationCreateOneWithoutRestaurantInput!
}

input RestaurantCreateOneWithoutLocationInput {
  create: RestaurantCreateWithoutLocationInput
  connect: RestaurantWhereUniqueInput
}

input RestaurantCreateWithoutLocationInput {
  title: String!
  avgPricePerPerson: Int!
  isCurated: Boolean
  slug: String!
  popularity: Int!
  pictures: PictureCreateManyInput
}

"""An edge in a connection."""
type RestaurantEdge {
  """The item at the end of the edge."""
  node: Restaurant!

  """A cursor for use in pagination."""
  cursor: String!
}

enum RestaurantOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  title_ASC
  title_DESC
  avgPricePerPerson_ASC
  avgPricePerPerson_DESC
  isCurated_ASC
  isCurated_DESC
  slug_ASC
  slug_DESC
  popularity_ASC
  popularity_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type RestaurantPreviousValues {
  id: ID!
  createdAt: DateTime!
  title: String!
  avgPricePerPerson: Int!
  isCurated: Boolean!
  slug: String!
  popularity: Int!
}

type RestaurantSubscriptionPayload {
  mutation: MutationType!
  node: Restaurant
  updatedFields: [String!]
  previousValues: RestaurantPreviousValues
}

input RestaurantSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [RestaurantSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [RestaurantSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [RestaurantSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: RestaurantWhereInput
}

input RestaurantUpdateInput {
  title: String
  avgPricePerPerson: Int
  isCurated: Boolean
  slug: String
  popularity: Int
  pictures: PictureUpdateManyInput
  location: LocationUpdateOneWithoutRestaurantInput
}

input RestaurantUpdateOneWithoutLocationInput {
  create: RestaurantCreateWithoutLocationInput
  connect: RestaurantWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: RestaurantUpdateWithoutLocationDataInput
  upsert: RestaurantUpsertWithoutLocationInput
}

input RestaurantUpdateWithoutLocationDataInput {
  title: String
  avgPricePerPerson: Int
  isCurated: Boolean
  slug: String
  popularity: Int
  pictures: PictureUpdateManyInput
}

input RestaurantUpsertWithoutLocationInput {
  update: RestaurantUpdateWithoutLocationDataInput!
  create: RestaurantCreateWithoutLocationInput!
}

input RestaurantWhereInput {
  """Logical AND on all given filters."""
  AND: [RestaurantWhereInput!]

  """Logical OR on all given filters."""
  OR: [RestaurantWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [RestaurantWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  avgPricePerPerson: Int

  """All values that are not equal to given value."""
  avgPricePerPerson_not: Int

  """All values that are contained in given list."""
  avgPricePerPerson_in: [Int!]

  """All values that are not contained in given list."""
  avgPricePerPerson_not_in: [Int!]

  """All values less than the given value."""
  avgPricePerPerson_lt: Int

  """All values less than or equal the given value."""
  avgPricePerPerson_lte: Int

  """All values greater than the given value."""
  avgPricePerPerson_gt: Int

  """All values greater than or equal the given value."""
  avgPricePerPerson_gte: Int
  isCurated: Boolean

  """All values that are not equal to given value."""
  isCurated_not: Boolean
  slug: String

  """All values that are not equal to given value."""
  slug_not: String

  """All values that are contained in given list."""
  slug_in: [String!]

  """All values that are not contained in given list."""
  slug_not_in: [String!]

  """All values less than the given value."""
  slug_lt: String

  """All values less than or equal the given value."""
  slug_lte: String

  """All values greater than the given value."""
  slug_gt: String

  """All values greater than or equal the given value."""
  slug_gte: String

  """All values containing the given string."""
  slug_contains: String

  """All values not containing the given string."""
  slug_not_contains: String

  """All values starting with the given string."""
  slug_starts_with: String

  """All values not starting with the given string."""
  slug_not_starts_with: String

  """All values ending with the given string."""
  slug_ends_with: String

  """All values not ending with the given string."""
  slug_not_ends_with: String
  popularity: Int

  """All values that are not equal to given value."""
  popularity_not: Int

  """All values that are contained in given list."""
  popularity_in: [Int!]

  """All values that are not contained in given list."""
  popularity_not_in: [Int!]

  """All values less than the given value."""
  popularity_lt: Int

  """All values less than or equal the given value."""
  popularity_lte: Int

  """All values greater than the given value."""
  popularity_gt: Int

  """All values greater than or equal the given value."""
  popularity_gte: Int
  pictures_every: PictureWhereInput
  pictures_some: PictureWhereInput
  pictures_none: PictureWhereInput
  location: LocationWhereInput
}

input RestaurantWhereUniqueInput {
  id: ID
}

type Review implements Node {
  id: ID!
  createdAt: DateTime!
  text: String!
  stars: Int!
  accuracy: Int!
  location: Int!
  checkIn: Int!
  value: Int!
  cleanliness: Int!
  communication: Int!
  place(where: PlaceWhereInput): Place!
  experience(where: ExperienceWhereInput): Experience
}

"""A connection to a list of items."""
type ReviewConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ReviewEdge]!
  aggregate: AggregateReview!
}

input ReviewCreateInput {
  text: String!
  stars: Int!
  accuracy: Int!
  location: Int!
  checkIn: Int!
  value: Int!
  cleanliness: Int!
  communication: Int!
  place: PlaceCreateOneWithoutReviewsInput!
  experience: ExperienceCreateOneWithoutReviewsInput
}

input ReviewCreateManyWithoutExperienceInput {
  create: [ReviewCreateWithoutExperienceInput!]
  connect: [ReviewWhereUniqueInput!]
}

input ReviewCreateManyWithoutPlaceInput {
  create: [ReviewCreateWithoutPlaceInput!]
  connect: [ReviewWhereUniqueInput!]
}

input ReviewCreateWithoutExperienceInput {
  text: String!
  stars: Int!
  accuracy: Int!
  location: Int!
  checkIn: Int!
  value: Int!
  cleanliness: Int!
  communication: Int!
  place: PlaceCreateOneWithoutReviewsInput!
}

input ReviewCreateWithoutPlaceInput {
  text: String!
  stars: Int!
  accuracy: Int!
  location: Int!
  checkIn: Int!
  value: Int!
  cleanliness: Int!
  communication: Int!
  experience: ExperienceCreateOneWithoutReviewsInput
}

"""An edge in a connection."""
type ReviewEdge {
  """The item at the end of the edge."""
  node: Review!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ReviewOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  text_ASC
  text_DESC
  stars_ASC
  stars_DESC
  accuracy_ASC
  accuracy_DESC
  location_ASC
  location_DESC
  checkIn_ASC
  checkIn_DESC
  value_ASC
  value_DESC
  cleanliness_ASC
  cleanliness_DESC
  communication_ASC
  communication_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ReviewPreviousValues {
  id: ID!
  createdAt: DateTime!
  text: String!
  stars: Int!
  accuracy: Int!
  location: Int!
  checkIn: Int!
  value: Int!
  cleanliness: Int!
  communication: Int!
}

type ReviewSubscriptionPayload {
  mutation: MutationType!
  node: Review
  updatedFields: [String!]
  previousValues: ReviewPreviousValues
}

input ReviewSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ReviewSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ReviewSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ReviewSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ReviewWhereInput
}

input ReviewUpdateInput {
  text: String
  stars: Int
  accuracy: Int
  location: Int
  checkIn: Int
  value: Int
  cleanliness: Int
  communication: Int
  place: PlaceUpdateOneWithoutReviewsInput
  experience: ExperienceUpdateOneWithoutReviewsInput
}

input ReviewUpdateManyWithoutExperienceInput {
  create: [ReviewCreateWithoutExperienceInput!]
  connect: [ReviewWhereUniqueInput!]
  disconnect: [ReviewWhereUniqueInput!]
  delete: [ReviewWhereUniqueInput!]
  update: [ReviewUpdateWithWhereUniqueWithoutExperienceInput!]
  upsert: [ReviewUpsertWithWhereUniqueWithoutExperienceInput!]
}

input ReviewUpdateManyWithoutPlaceInput {
  create: [ReviewCreateWithoutPlaceInput!]
  connect: [ReviewWhereUniqueInput!]
  disconnect: [ReviewWhereUniqueInput!]
  delete: [ReviewWhereUniqueInput!]
  update: [ReviewUpdateWithWhereUniqueWithoutPlaceInput!]
  upsert: [ReviewUpsertWithWhereUniqueWithoutPlaceInput!]
}

input ReviewUpdateWithoutExperienceDataInput {
  text: String
  stars: Int
  accuracy: Int
  location: Int
  checkIn: Int
  value: Int
  cleanliness: Int
  communication: Int
  place: PlaceUpdateOneWithoutReviewsInput
}

input ReviewUpdateWithoutPlaceDataInput {
  text: String
  stars: Int
  accuracy: Int
  location: Int
  checkIn: Int
  value: Int
  cleanliness: Int
  communication: Int
  experience: ExperienceUpdateOneWithoutReviewsInput
}

input ReviewUpdateWithWhereUniqueWithoutExperienceInput {
  where: ReviewWhereUniqueInput!
  data: ReviewUpdateWithoutExperienceDataInput!
}

input ReviewUpdateWithWhereUniqueWithoutPlaceInput {
  where: ReviewWhereUniqueInput!
  data: ReviewUpdateWithoutPlaceDataInput!
}

input ReviewUpsertWithWhereUniqueWithoutExperienceInput {
  where: ReviewWhereUniqueInput!
  update: ReviewUpdateWithoutExperienceDataInput!
  create: ReviewCreateWithoutExperienceInput!
}

input ReviewUpsertWithWhereUniqueWithoutPlaceInput {
  where: ReviewWhereUniqueInput!
  update: ReviewUpdateWithoutPlaceDataInput!
  create: ReviewCreateWithoutPlaceInput!
}

input ReviewWhereInput {
  """Logical AND on all given filters."""
  AND: [ReviewWhereInput!]

  """Logical OR on all given filters."""
  OR: [ReviewWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ReviewWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  text: String

  """All values that are not equal to given value."""
  text_not: String

  """All values that are contained in given list."""
  text_in: [String!]

  """All values that are not contained in given list."""
  text_not_in: [String!]

  """All values less than the given value."""
  text_lt: String

  """All values less than or equal the given value."""
  text_lte: String

  """All values greater than the given value."""
  text_gt: String

  """All values greater than or equal the given value."""
  text_gte: String

  """All values containing the given string."""
  text_contains: String

  """All values not containing the given string."""
  text_not_contains: String

  """All values starting with the given string."""
  text_starts_with: String

  """All values not starting with the given string."""
  text_not_starts_with: String

  """All values ending with the given string."""
  text_ends_with: String

  """All values not ending with the given string."""
  text_not_ends_with: String
  stars: Int

  """All values that are not equal to given value."""
  stars_not: Int

  """All values that are contained in given list."""
  stars_in: [Int!]

  """All values that are not contained in given list."""
  stars_not_in: [Int!]

  """All values less than the given value."""
  stars_lt: Int

  """All values less than or equal the given value."""
  stars_lte: Int

  """All values greater than the given value."""
  stars_gt: Int

  """All values greater than or equal the given value."""
  stars_gte: Int
  accuracy: Int

  """All values that are not equal to given value."""
  accuracy_not: Int

  """All values that are contained in given list."""
  accuracy_in: [Int!]

  """All values that are not contained in given list."""
  accuracy_not_in: [Int!]

  """All values less than the given value."""
  accuracy_lt: Int

  """All values less than or equal the given value."""
  accuracy_lte: Int

  """All values greater than the given value."""
  accuracy_gt: Int

  """All values greater than or equal the given value."""
  accuracy_gte: Int
  location: Int

  """All values that are not equal to given value."""
  location_not: Int

  """All values that are contained in given list."""
  location_in: [Int!]

  """All values that are not contained in given list."""
  location_not_in: [Int!]

  """All values less than the given value."""
  location_lt: Int

  """All values less than or equal the given value."""
  location_lte: Int

  """All values greater than the given value."""
  location_gt: Int

  """All values greater than or equal the given value."""
  location_gte: Int
  checkIn: Int

  """All values that are not equal to given value."""
  checkIn_not: Int

  """All values that are contained in given list."""
  checkIn_in: [Int!]

  """All values that are not contained in given list."""
  checkIn_not_in: [Int!]

  """All values less than the given value."""
  checkIn_lt: Int

  """All values less than or equal the given value."""
  checkIn_lte: Int

  """All values greater than the given value."""
  checkIn_gt: Int

  """All values greater than or equal the given value."""
  checkIn_gte: Int
  value: Int

  """All values that are not equal to given value."""
  value_not: Int

  """All values that are contained in given list."""
  value_in: [Int!]

  """All values that are not contained in given list."""
  value_not_in: [Int!]

  """All values less than the given value."""
  value_lt: Int

  """All values less than or equal the given value."""
  value_lte: Int

  """All values greater than the given value."""
  value_gt: Int

  """All values greater than or equal the given value."""
  value_gte: Int
  cleanliness: Int

  """All values that are not equal to given value."""
  cleanliness_not: Int

  """All values that are contained in given list."""
  cleanliness_in: [Int!]

  """All values that are not contained in given list."""
  cleanliness_not_in: [Int!]

  """All values less than the given value."""
  cleanliness_lt: Int

  """All values less than or equal the given value."""
  cleanliness_lte: Int

  """All values greater than the given value."""
  cleanliness_gt: Int

  """All values greater than or equal the given value."""
  cleanliness_gte: Int
  communication: Int

  """All values that are not equal to given value."""
  communication_not: Int

  """All values that are contained in given list."""
  communication_in: [Int!]

  """All values that are not contained in given list."""
  communication_not_in: [Int!]

  """All values less than the given value."""
  communication_lt: Int

  """All values less than or equal the given value."""
  communication_lte: Int

  """All values greater than the given value."""
  communication_gt: Int

  """All values greater than or equal the given value."""
  communication_gte: Int
  place: PlaceWhereInput
  experience: ExperienceWhereInput
}

input ReviewWhereUniqueInput {
  id: ID
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  place(where: PlaceSubscriptionWhereInput): PlaceSubscriptionPayload
  pricing(where: PricingSubscriptionWhereInput): PricingSubscriptionPayload
  guestRequirements(where: GuestRequirementsSubscriptionWhereInput): GuestRequirementsSubscriptionPayload
  policies(where: PoliciesSubscriptionWhereInput): PoliciesSubscriptionPayload
  houseRules(where: HouseRulesSubscriptionWhereInput): HouseRulesSubscriptionPayload
  views(where: ViewsSubscriptionWhereInput): ViewsSubscriptionPayload
  location(where: LocationSubscriptionWhereInput): LocationSubscriptionPayload
  neighbourhood(where: NeighbourhoodSubscriptionWhereInput): NeighbourhoodSubscriptionPayload
  city(where: CitySubscriptionWhereInput): CitySubscriptionPayload
  picture(where: PictureSubscriptionWhereInput): PictureSubscriptionPayload
  experience(where: ExperienceSubscriptionWhereInput): ExperienceSubscriptionPayload
  experienceCategory(where: ExperienceCategorySubscriptionWhereInput): ExperienceCategorySubscriptionPayload
  amenities(where: AmenitiesSubscriptionWhereInput): AmenitiesSubscriptionPayload
  review(where: ReviewSubscriptionWhereInput): ReviewSubscriptionPayload
  booking(where: BookingSubscriptionWhereInput): BookingSubscriptionPayload
  payment(where: PaymentSubscriptionWhereInput): PaymentSubscriptionPayload
  paymentAccount(where: PaymentAccountSubscriptionWhereInput): PaymentAccountSubscriptionPayload
  paypalInformation(where: PaypalInformationSubscriptionWhereInput): PaypalInformationSubscriptionPayload
  creditCardInformation(where: CreditCardInformationSubscriptionWhereInput): CreditCardInformationSubscriptionPayload
  message(where: MessageSubscriptionWhereInput): MessageSubscriptionPayload
  notification(where: NotificationSubscriptionWhereInput): NotificationSubscriptionPayload
  restaurant(where: RestaurantSubscriptionWhereInput): RestaurantSubscriptionPayload
}

type User implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  firstName: String!
  lastName: String!
  email: String!
  password: String!
  phone: String!
  responseRate: Float
  responseTime: Int
  isSuperHost: Boolean!
  ownedPlaces(where: PlaceWhereInput, orderBy: PlaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Place!]
  location(where: LocationWhereInput): Location
  bookings(where: BookingWhereInput, orderBy: BookingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Booking!]
  paymentAccount(where: PaymentAccountWhereInput, orderBy: PaymentAccountOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PaymentAccount!]
  sentMessages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message!]
  receivedMessages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message!]
  notifications(where: NotificationWhereInput, orderBy: NotificationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Notification!]
  profilePicture(where: PictureWhereInput): Picture
  hostingExperiences(where: ExperienceWhereInput, orderBy: ExperienceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Experience!]
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  firstName: String!
  lastName: String!
  email: String!
  password: String!
  phone: String!
  responseRate: Float
  responseTime: Int
  isSuperHost: Boolean
  ownedPlaces: PlaceCreateManyWithoutHostInput
  location: LocationCreateOneWithoutUserInput
  bookings: BookingCreateManyWithoutBookeeInput
  paymentAccount: PaymentAccountCreateManyWithoutUserInput
  sentMessages: MessageCreateManyWithoutFromInput
  receivedMessages: MessageCreateManyWithoutToInput
  notifications: NotificationCreateManyWithoutUserInput
  profilePicture: PictureCreateOneInput
  hostingExperiences: ExperienceCreateManyWithoutHostInput
}

input UserCreateOneWithoutBookingsInput {
  create: UserCreateWithoutBookingsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutHostingExperiencesInput {
  create: UserCreateWithoutHostingExperiencesInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutLocationInput {
  create: UserCreateWithoutLocationInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutNotificationsInput {
  create: UserCreateWithoutNotificationsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutOwnedPlacesInput {
  create: UserCreateWithoutOwnedPlacesInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutPaymentAccountInput {
  create: UserCreateWithoutPaymentAccountInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutReceivedMessagesInput {
  create: UserCreateWithoutReceivedMessagesInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutSentMessagesInput {
  create: UserCreateWithoutSentMessagesInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutBookingsInput {
  firstName: String!
  lastName: String!
  email: String!
  password: String!
  phone: String!
  responseRate: Float
  responseTime: Int
  isSuperHost: Boolean
  ownedPlaces: PlaceCreateManyWithoutHostInput
  location: LocationCreateOneWithoutUserInput
  paymentAccount: PaymentAccountCreateManyWithoutUserInput
  sentMessages: MessageCreateManyWithoutFromInput
  receivedMessages: MessageCreateManyWithoutToInput
  notifications: NotificationCreateManyWithoutUserInput
  profilePicture: PictureCreateOneInput
  hostingExperiences: ExperienceCreateManyWithoutHostInput
}

input UserCreateWithoutHostingExperiencesInput {
  firstName: String!
  lastName: String!
  email: String!
  password: String!
  phone: String!
  responseRate: Float
  responseTime: Int
  isSuperHost: Boolean
  ownedPlaces: PlaceCreateManyWithoutHostInput
  location: LocationCreateOneWithoutUserInput
  bookings: BookingCreateManyWithoutBookeeInput
  paymentAccount: PaymentAccountCreateManyWithoutUserInput
  sentMessages: MessageCreateManyWithoutFromInput
  receivedMessages: MessageCreateManyWithoutToInput
  notifications: NotificationCreateManyWithoutUserInput
  profilePicture: PictureCreateOneInput
}

input UserCreateWithoutLocationInput {
  firstName: String!
  lastName: String!
  email: String!
  password: String!
  phone: String!
  responseRate: Float
  responseTime: Int
  isSuperHost: Boolean
  ownedPlaces: PlaceCreateManyWithoutHostInput
  bookings: BookingCreateManyWithoutBookeeInput
  paymentAccount: PaymentAccountCreateManyWithoutUserInput
  sentMessages: MessageCreateManyWithoutFromInput
  receivedMessages: MessageCreateManyWithoutToInput
  notifications: NotificationCreateManyWithoutUserInput
  profilePicture: PictureCreateOneInput
  hostingExperiences: ExperienceCreateManyWithoutHostInput
}

input UserCreateWithoutNotificationsInput {
  firstName: String!
  lastName: String!
  email: String!
  password: String!
  phone: String!
  responseRate: Float
  responseTime: Int
  isSuperHost: Boolean
  ownedPlaces: PlaceCreateManyWithoutHostInput
  location: LocationCreateOneWithoutUserInput
  bookings: BookingCreateManyWithoutBookeeInput
  paymentAccount: PaymentAccountCreateManyWithoutUserInput
  sentMessages: MessageCreateManyWithoutFromInput
  receivedMessages: MessageCreateManyWithoutToInput
  profilePicture: PictureCreateOneInput
  hostingExperiences: ExperienceCreateManyWithoutHostInput
}

input UserCreateWithoutOwnedPlacesInput {
  firstName: String!
  lastName: String!
  email: String!
  password: String!
  phone: String!
  responseRate: Float
  responseTime: Int
  isSuperHost: Boolean
  location: LocationCreateOneWithoutUserInput
  bookings: BookingCreateManyWithoutBookeeInput
  paymentAccount: PaymentAccountCreateManyWithoutUserInput
  sentMessages: MessageCreateManyWithoutFromInput
  receivedMessages: MessageCreateManyWithoutToInput
  notifications: NotificationCreateManyWithoutUserInput
  profilePicture: PictureCreateOneInput
  hostingExperiences: ExperienceCreateManyWithoutHostInput
}

input UserCreateWithoutPaymentAccountInput {
  firstName: String!
  lastName: String!
  email: String!
  password: String!
  phone: String!
  responseRate: Float
  responseTime: Int
  isSuperHost: Boolean
  ownedPlaces: PlaceCreateManyWithoutHostInput
  location: LocationCreateOneWithoutUserInput
  bookings: BookingCreateManyWithoutBookeeInput
  sentMessages: MessageCreateManyWithoutFromInput
  receivedMessages: MessageCreateManyWithoutToInput
  notifications: NotificationCreateManyWithoutUserInput
  profilePicture: PictureCreateOneInput
  hostingExperiences: ExperienceCreateManyWithoutHostInput
}

input UserCreateWithoutReceivedMessagesInput {
  firstName: String!
  lastName: String!
  email: String!
  password: String!
  phone: String!
  responseRate: Float
  responseTime: Int
  isSuperHost: Boolean
  ownedPlaces: PlaceCreateManyWithoutHostInput
  location: LocationCreateOneWithoutUserInput
  bookings: BookingCreateManyWithoutBookeeInput
  paymentAccount: PaymentAccountCreateManyWithoutUserInput
  sentMessages: MessageCreateManyWithoutFromInput
  notifications: NotificationCreateManyWithoutUserInput
  profilePicture: PictureCreateOneInput
  hostingExperiences: ExperienceCreateManyWithoutHostInput
}

input UserCreateWithoutSentMessagesInput {
  firstName: String!
  lastName: String!
  email: String!
  password: String!
  phone: String!
  responseRate: Float
  responseTime: Int
  isSuperHost: Boolean
  ownedPlaces: PlaceCreateManyWithoutHostInput
  location: LocationCreateOneWithoutUserInput
  bookings: BookingCreateManyWithoutBookeeInput
  paymentAccount: PaymentAccountCreateManyWithoutUserInput
  receivedMessages: MessageCreateManyWithoutToInput
  notifications: NotificationCreateManyWithoutUserInput
  profilePicture: PictureCreateOneInput
  hostingExperiences: ExperienceCreateManyWithoutHostInput
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  phone_ASC
  phone_DESC
  responseRate_ASC
  responseRate_DESC
  responseTime_ASC
  responseTime_DESC
  isSuperHost_ASC
  isSuperHost_DESC
}

type UserPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  firstName: String!
  lastName: String!
  email: String!
  password: String!
  phone: String!
  responseRate: Float
  responseTime: Int
  isSuperHost: Boolean!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateInput {
  firstName: String
  lastName: String
  email: String
  password: String
  phone: String
  responseRate: Float
  responseTime: Int
  isSuperHost: Boolean
  ownedPlaces: PlaceUpdateManyWithoutHostInput
  location: LocationUpdateOneWithoutUserInput
  bookings: BookingUpdateManyWithoutBookeeInput
  paymentAccount: PaymentAccountUpdateManyWithoutUserInput
  sentMessages: MessageUpdateManyWithoutFromInput
  receivedMessages: MessageUpdateManyWithoutToInput
  notifications: NotificationUpdateManyWithoutUserInput
  profilePicture: PictureUpdateOneInput
  hostingExperiences: ExperienceUpdateManyWithoutHostInput
}

input UserUpdateOneWithoutBookingsInput {
  create: UserCreateWithoutBookingsInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutBookingsDataInput
  upsert: UserUpsertWithoutBookingsInput
}

input UserUpdateOneWithoutHostingExperiencesInput {
  create: UserCreateWithoutHostingExperiencesInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutHostingExperiencesDataInput
  upsert: UserUpsertWithoutHostingExperiencesInput
}

input UserUpdateOneWithoutLocationInput {
  create: UserCreateWithoutLocationInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateWithoutLocationDataInput
  upsert: UserUpsertWithoutLocationInput
}

input UserUpdateOneWithoutNotificationsInput {
  create: UserCreateWithoutNotificationsInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutNotificationsDataInput
  upsert: UserUpsertWithoutNotificationsInput
}

input UserUpdateOneWithoutOwnedPlacesInput {
  create: UserCreateWithoutOwnedPlacesInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutOwnedPlacesDataInput
  upsert: UserUpsertWithoutOwnedPlacesInput
}

input UserUpdateOneWithoutPaymentAccountInput {
  create: UserCreateWithoutPaymentAccountInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutPaymentAccountDataInput
  upsert: UserUpsertWithoutPaymentAccountInput
}

input UserUpdateOneWithoutReceivedMessagesInput {
  create: UserCreateWithoutReceivedMessagesInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutReceivedMessagesDataInput
  upsert: UserUpsertWithoutReceivedMessagesInput
}

input UserUpdateOneWithoutSentMessagesInput {
  create: UserCreateWithoutSentMessagesInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutSentMessagesDataInput
  upsert: UserUpsertWithoutSentMessagesInput
}

input UserUpdateWithoutBookingsDataInput {
  firstName: String
  lastName: String
  email: String
  password: String
  phone: String
  responseRate: Float
  responseTime: Int
  isSuperHost: Boolean
  ownedPlaces: PlaceUpdateManyWithoutHostInput
  location: LocationUpdateOneWithoutUserInput
  paymentAccount: PaymentAccountUpdateManyWithoutUserInput
  sentMessages: MessageUpdateManyWithoutFromInput
  receivedMessages: MessageUpdateManyWithoutToInput
  notifications: NotificationUpdateManyWithoutUserInput
  profilePicture: PictureUpdateOneInput
  hostingExperiences: ExperienceUpdateManyWithoutHostInput
}

input UserUpdateWithoutHostingExperiencesDataInput {
  firstName: String
  lastName: String
  email: String
  password: String
  phone: String
  responseRate: Float
  responseTime: Int
  isSuperHost: Boolean
  ownedPlaces: PlaceUpdateManyWithoutHostInput
  location: LocationUpdateOneWithoutUserInput
  bookings: BookingUpdateManyWithoutBookeeInput
  paymentAccount: PaymentAccountUpdateManyWithoutUserInput
  sentMessages: MessageUpdateManyWithoutFromInput
  receivedMessages: MessageUpdateManyWithoutToInput
  notifications: NotificationUpdateManyWithoutUserInput
  profilePicture: PictureUpdateOneInput
}

input UserUpdateWithoutLocationDataInput {
  firstName: String
  lastName: String
  email: String
  password: String
  phone: String
  responseRate: Float
  responseTime: Int
  isSuperHost: Boolean
  ownedPlaces: PlaceUpdateManyWithoutHostInput
  bookings: BookingUpdateManyWithoutBookeeInput
  paymentAccount: PaymentAccountUpdateManyWithoutUserInput
  sentMessages: MessageUpdateManyWithoutFromInput
  receivedMessages: MessageUpdateManyWithoutToInput
  notifications: NotificationUpdateManyWithoutUserInput
  profilePicture: PictureUpdateOneInput
  hostingExperiences: ExperienceUpdateManyWithoutHostInput
}

input UserUpdateWithoutNotificationsDataInput {
  firstName: String
  lastName: String
  email: String
  password: String
  phone: String
  responseRate: Float
  responseTime: Int
  isSuperHost: Boolean
  ownedPlaces: PlaceUpdateManyWithoutHostInput
  location: LocationUpdateOneWithoutUserInput
  bookings: BookingUpdateManyWithoutBookeeInput
  paymentAccount: PaymentAccountUpdateManyWithoutUserInput
  sentMessages: MessageUpdateManyWithoutFromInput
  receivedMessages: MessageUpdateManyWithoutToInput
  profilePicture: PictureUpdateOneInput
  hostingExperiences: ExperienceUpdateManyWithoutHostInput
}

input UserUpdateWithoutOwnedPlacesDataInput {
  firstName: String
  lastName: String
  email: String
  password: String
  phone: String
  responseRate: Float
  responseTime: Int
  isSuperHost: Boolean
  location: LocationUpdateOneWithoutUserInput
  bookings: BookingUpdateManyWithoutBookeeInput
  paymentAccount: PaymentAccountUpdateManyWithoutUserInput
  sentMessages: MessageUpdateManyWithoutFromInput
  receivedMessages: MessageUpdateManyWithoutToInput
  notifications: NotificationUpdateManyWithoutUserInput
  profilePicture: PictureUpdateOneInput
  hostingExperiences: ExperienceUpdateManyWithoutHostInput
}

input UserUpdateWithoutPaymentAccountDataInput {
  firstName: String
  lastName: String
  email: String
  password: String
  phone: String
  responseRate: Float
  responseTime: Int
  isSuperHost: Boolean
  ownedPlaces: PlaceUpdateManyWithoutHostInput
  location: LocationUpdateOneWithoutUserInput
  bookings: BookingUpdateManyWithoutBookeeInput
  sentMessages: MessageUpdateManyWithoutFromInput
  receivedMessages: MessageUpdateManyWithoutToInput
  notifications: NotificationUpdateManyWithoutUserInput
  profilePicture: PictureUpdateOneInput
  hostingExperiences: ExperienceUpdateManyWithoutHostInput
}

input UserUpdateWithoutReceivedMessagesDataInput {
  firstName: String
  lastName: String
  email: String
  password: String
  phone: String
  responseRate: Float
  responseTime: Int
  isSuperHost: Boolean
  ownedPlaces: PlaceUpdateManyWithoutHostInput
  location: LocationUpdateOneWithoutUserInput
  bookings: BookingUpdateManyWithoutBookeeInput
  paymentAccount: PaymentAccountUpdateManyWithoutUserInput
  sentMessages: MessageUpdateManyWithoutFromInput
  notifications: NotificationUpdateManyWithoutUserInput
  profilePicture: PictureUpdateOneInput
  hostingExperiences: ExperienceUpdateManyWithoutHostInput
}

input UserUpdateWithoutSentMessagesDataInput {
  firstName: String
  lastName: String
  email: String
  password: String
  phone: String
  responseRate: Float
  responseTime: Int
  isSuperHost: Boolean
  ownedPlaces: PlaceUpdateManyWithoutHostInput
  location: LocationUpdateOneWithoutUserInput
  bookings: BookingUpdateManyWithoutBookeeInput
  paymentAccount: PaymentAccountUpdateManyWithoutUserInput
  receivedMessages: MessageUpdateManyWithoutToInput
  notifications: NotificationUpdateManyWithoutUserInput
  profilePicture: PictureUpdateOneInput
  hostingExperiences: ExperienceUpdateManyWithoutHostInput
}

input UserUpsertWithoutBookingsInput {
  update: UserUpdateWithoutBookingsDataInput!
  create: UserCreateWithoutBookingsInput!
}

input UserUpsertWithoutHostingExperiencesInput {
  update: UserUpdateWithoutHostingExperiencesDataInput!
  create: UserCreateWithoutHostingExperiencesInput!
}

input UserUpsertWithoutLocationInput {
  update: UserUpdateWithoutLocationDataInput!
  create: UserCreateWithoutLocationInput!
}

input UserUpsertWithoutNotificationsInput {
  update: UserUpdateWithoutNotificationsDataInput!
  create: UserCreateWithoutNotificationsInput!
}

input UserUpsertWithoutOwnedPlacesInput {
  update: UserUpdateWithoutOwnedPlacesDataInput!
  create: UserCreateWithoutOwnedPlacesInput!
}

input UserUpsertWithoutPaymentAccountInput {
  update: UserUpdateWithoutPaymentAccountDataInput!
  create: UserCreateWithoutPaymentAccountInput!
}

input UserUpsertWithoutReceivedMessagesInput {
  update: UserUpdateWithoutReceivedMessagesDataInput!
  create: UserCreateWithoutReceivedMessagesInput!
}

input UserUpsertWithoutSentMessagesInput {
  update: UserUpdateWithoutSentMessagesDataInput!
  create: UserCreateWithoutSentMessagesInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  firstName: String

  """All values that are not equal to given value."""
  firstName_not: String

  """All values that are contained in given list."""
  firstName_in: [String!]

  """All values that are not contained in given list."""
  firstName_not_in: [String!]

  """All values less than the given value."""
  firstName_lt: String

  """All values less than or equal the given value."""
  firstName_lte: String

  """All values greater than the given value."""
  firstName_gt: String

  """All values greater than or equal the given value."""
  firstName_gte: String

  """All values containing the given string."""
  firstName_contains: String

  """All values not containing the given string."""
  firstName_not_contains: String

  """All values starting with the given string."""
  firstName_starts_with: String

  """All values not starting with the given string."""
  firstName_not_starts_with: String

  """All values ending with the given string."""
  firstName_ends_with: String

  """All values not ending with the given string."""
  firstName_not_ends_with: String
  lastName: String

  """All values that are not equal to given value."""
  lastName_not: String

  """All values that are contained in given list."""
  lastName_in: [String!]

  """All values that are not contained in given list."""
  lastName_not_in: [String!]

  """All values less than the given value."""
  lastName_lt: String

  """All values less than or equal the given value."""
  lastName_lte: String

  """All values greater than the given value."""
  lastName_gt: String

  """All values greater than or equal the given value."""
  lastName_gte: String

  """All values containing the given string."""
  lastName_contains: String

  """All values not containing the given string."""
  lastName_not_contains: String

  """All values starting with the given string."""
  lastName_starts_with: String

  """All values not starting with the given string."""
  lastName_not_starts_with: String

  """All values ending with the given string."""
  lastName_ends_with: String

  """All values not ending with the given string."""
  lastName_not_ends_with: String
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  phone: String

  """All values that are not equal to given value."""
  phone_not: String

  """All values that are contained in given list."""
  phone_in: [String!]

  """All values that are not contained in given list."""
  phone_not_in: [String!]

  """All values less than the given value."""
  phone_lt: String

  """All values less than or equal the given value."""
  phone_lte: String

  """All values greater than the given value."""
  phone_gt: String

  """All values greater than or equal the given value."""
  phone_gte: String

  """All values containing the given string."""
  phone_contains: String

  """All values not containing the given string."""
  phone_not_contains: String

  """All values starting with the given string."""
  phone_starts_with: String

  """All values not starting with the given string."""
  phone_not_starts_with: String

  """All values ending with the given string."""
  phone_ends_with: String

  """All values not ending with the given string."""
  phone_not_ends_with: String
  responseRate: Float

  """All values that are not equal to given value."""
  responseRate_not: Float

  """All values that are contained in given list."""
  responseRate_in: [Float!]

  """All values that are not contained in given list."""
  responseRate_not_in: [Float!]

  """All values less than the given value."""
  responseRate_lt: Float

  """All values less than or equal the given value."""
  responseRate_lte: Float

  """All values greater than the given value."""
  responseRate_gt: Float

  """All values greater than or equal the given value."""
  responseRate_gte: Float
  responseTime: Int

  """All values that are not equal to given value."""
  responseTime_not: Int

  """All values that are contained in given list."""
  responseTime_in: [Int!]

  """All values that are not contained in given list."""
  responseTime_not_in: [Int!]

  """All values less than the given value."""
  responseTime_lt: Int

  """All values less than or equal the given value."""
  responseTime_lte: Int

  """All values greater than the given value."""
  responseTime_gt: Int

  """All values greater than or equal the given value."""
  responseTime_gte: Int
  isSuperHost: Boolean

  """All values that are not equal to given value."""
  isSuperHost_not: Boolean
  ownedPlaces_every: PlaceWhereInput
  ownedPlaces_some: PlaceWhereInput
  ownedPlaces_none: PlaceWhereInput
  location: LocationWhereInput
  bookings_every: BookingWhereInput
  bookings_some: BookingWhereInput
  bookings_none: BookingWhereInput
  paymentAccount_every: PaymentAccountWhereInput
  paymentAccount_some: PaymentAccountWhereInput
  paymentAccount_none: PaymentAccountWhereInput
  sentMessages_every: MessageWhereInput
  sentMessages_some: MessageWhereInput
  sentMessages_none: MessageWhereInput
  receivedMessages_every: MessageWhereInput
  receivedMessages_some: MessageWhereInput
  receivedMessages_none: MessageWhereInput
  notifications_every: NotificationWhereInput
  notifications_some: NotificationWhereInput
  notifications_none: NotificationWhereInput
  profilePicture: PictureWhereInput
  hostingExperiences_every: ExperienceWhereInput
  hostingExperiences_some: ExperienceWhereInput
  hostingExperiences_none: ExperienceWhereInput
}

input UserWhereUniqueInput {
  id: ID
  email: String
}

type Views implements Node {
  id: ID!
  lastWeek: Int!
  place(where: PlaceWhereInput): Place!
}

"""A connection to a list of items."""
type ViewsConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ViewsEdge]!
  aggregate: AggregateViews!
}

input ViewsCreateInput {
  lastWeek: Int!
  place: PlaceCreateOneWithoutViewsInput!
}

input ViewsCreateOneWithoutPlaceInput {
  create: ViewsCreateWithoutPlaceInput
  connect: ViewsWhereUniqueInput
}

input ViewsCreateWithoutPlaceInput {
  lastWeek: Int!
}

"""An edge in a connection."""
type ViewsEdge {
  """The item at the end of the edge."""
  node: Views!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ViewsOrderByInput {
  id_ASC
  id_DESC
  lastWeek_ASC
  lastWeek_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type ViewsPreviousValues {
  id: ID!
  lastWeek: Int!
}

type ViewsSubscriptionPayload {
  mutation: MutationType!
  node: Views
  updatedFields: [String!]
  previousValues: ViewsPreviousValues
}

input ViewsSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ViewsSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ViewsSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ViewsSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ViewsWhereInput
}

input ViewsUpdateInput {
  lastWeek: Int
  place: PlaceUpdateOneWithoutViewsInput
}

input ViewsUpdateOneWithoutPlaceInput {
  create: ViewsCreateWithoutPlaceInput
  connect: ViewsWhereUniqueInput
  delete: Boolean
  update: ViewsUpdateWithoutPlaceDataInput
  upsert: ViewsUpsertWithoutPlaceInput
}

input ViewsUpdateWithoutPlaceDataInput {
  lastWeek: Int
}

input ViewsUpsertWithoutPlaceInput {
  update: ViewsUpdateWithoutPlaceDataInput!
  create: ViewsCreateWithoutPlaceInput!
}

input ViewsWhereInput {
  """Logical AND on all given filters."""
  AND: [ViewsWhereInput!]

  """Logical OR on all given filters."""
  OR: [ViewsWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ViewsWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  lastWeek: Int

  """All values that are not equal to given value."""
  lastWeek_not: Int

  """All values that are contained in given list."""
  lastWeek_in: [Int!]

  """All values that are not contained in given list."""
  lastWeek_not_in: [Int!]

  """All values less than the given value."""
  lastWeek_lt: Int

  """All values less than or equal the given value."""
  lastWeek_lte: Int

  """All values greater than the given value."""
  lastWeek_gt: Int

  """All values greater than or equal the given value."""
  lastWeek_gte: Int
  place: PlaceWhereInput
}

input ViewsWhereUniqueInput {
  id: ID
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type ExperienceOrderByInput =   'id_ASC' |
  'id_DESC' |
  'title_ASC' |
  'title_DESC' |
  'pricePerPerson_ASC' |
  'pricePerPerson_DESC' |
  'popularity_ASC' |
  'popularity_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type NOTIFICATION_TYPE =   'OFFER' |
  'INSTANT_BOOK' |
  'RESPONSIVENESS' |
  'NEW_AMENITIES' |
  'HOUSE_RULES'

export type NotificationOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'type_ASC' |
  'type_DESC' |
  'link_ASC' |
  'link_DESC' |
  'readDate_ASC' |
  'readDate_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type RestaurantOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'title_ASC' |
  'title_DESC' |
  'avgPricePerPerson_ASC' |
  'avgPricePerPerson_DESC' |
  'isCurated_ASC' |
  'isCurated_DESC' |
  'slug_ASC' |
  'slug_DESC' |
  'popularity_ASC' |
  'popularity_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type MessageOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'deliveredAt_ASC' |
  'deliveredAt_DESC' |
  'readAt_ASC' |
  'readAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type PaypalInformationOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'email_ASC' |
  'email_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type PaymentAccountOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'type_ASC' |
  'type_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type ExperienceCategoryOrderByInput =   'id_ASC' |
  'id_DESC' |
  'mainColor_ASC' |
  'mainColor_DESC' |
  'name_ASC' |
  'name_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type CURRENCY =   'CAD' |
  'CHF' |
  'EUR' |
  'JPY' |
  'USD' |
  'ZAR'

export type CityOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type PaymentOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'serviceFee_ASC' |
  'serviceFee_DESC' |
  'placePrice_ASC' |
  'placePrice_DESC' |
  'totalPrice_ASC' |
  'totalPrice_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type HouseRulesOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'suitableForChildren_ASC' |
  'suitableForChildren_DESC' |
  'suitableForInfants_ASC' |
  'suitableForInfants_DESC' |
  'petsAllowed_ASC' |
  'petsAllowed_DESC' |
  'smokingAllowed_ASC' |
  'smokingAllowed_DESC' |
  'partiesAndEventsAllowed_ASC' |
  'partiesAndEventsAllowed_DESC' |
  'additionalRules_ASC' |
  'additionalRules_DESC'

export type BookingOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'startDate_ASC' |
  'startDate_DESC' |
  'endDate_ASC' |
  'endDate_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type GuestRequirementsOrderByInput =   'id_ASC' |
  'id_DESC' |
  'govIssuedId_ASC' |
  'govIssuedId_DESC' |
  'recommendationsFromOtherHosts_ASC' |
  'recommendationsFromOtherHosts_DESC' |
  'guestTripInformation_ASC' |
  'guestTripInformation_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type PictureOrderByInput =   'url_ASC' |
  'url_DESC' |
  'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type NeighbourhoodOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'slug_ASC' |
  'slug_DESC' |
  'featured_ASC' |
  'featured_DESC' |
  'popularity_ASC' |
  'popularity_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type AmenitiesOrderByInput =   'id_ASC' |
  'id_DESC' |
  'elevator_ASC' |
  'elevator_DESC' |
  'petsAllowed_ASC' |
  'petsAllowed_DESC' |
  'internet_ASC' |
  'internet_DESC' |
  'kitchen_ASC' |
  'kitchen_DESC' |
  'wirelessInternet_ASC' |
  'wirelessInternet_DESC' |
  'familyKidFriendly_ASC' |
  'familyKidFriendly_DESC' |
  'freeParkingOnPremises_ASC' |
  'freeParkingOnPremises_DESC' |
  'hotTub_ASC' |
  'hotTub_DESC' |
  'pool_ASC' |
  'pool_DESC' |
  'smokingAllowed_ASC' |
  'smokingAllowed_DESC' |
  'wheelchairAccessible_ASC' |
  'wheelchairAccessible_DESC' |
  'breakfast_ASC' |
  'breakfast_DESC' |
  'cableTv_ASC' |
  'cableTv_DESC' |
  'suitableForEvents_ASC' |
  'suitableForEvents_DESC' |
  'dryer_ASC' |
  'dryer_DESC' |
  'washer_ASC' |
  'washer_DESC' |
  'indoorFireplace_ASC' |
  'indoorFireplace_DESC' |
  'tv_ASC' |
  'tv_DESC' |
  'heating_ASC' |
  'heating_DESC' |
  'hangers_ASC' |
  'hangers_DESC' |
  'iron_ASC' |
  'iron_DESC' |
  'hairDryer_ASC' |
  'hairDryer_DESC' |
  'doorman_ASC' |
  'doorman_DESC' |
  'paidParkingOffPremises_ASC' |
  'paidParkingOffPremises_DESC' |
  'freeParkingOnStreet_ASC' |
  'freeParkingOnStreet_DESC' |
  'gym_ASC' |
  'gym_DESC' |
  'airConditioning_ASC' |
  'airConditioning_DESC' |
  'shampoo_ASC' |
  'shampoo_DESC' |
  'essentials_ASC' |
  'essentials_DESC' |
  'laptopFriendlyWorkspace_ASC' |
  'laptopFriendlyWorkspace_DESC' |
  'privateEntrance_ASC' |
  'privateEntrance_DESC' |
  'buzzerWirelessIntercom_ASC' |
  'buzzerWirelessIntercom_DESC' |
  'babyBath_ASC' |
  'babyBath_DESC' |
  'babyMonitor_ASC' |
  'babyMonitor_DESC' |
  'babysitterRecommendations_ASC' |
  'babysitterRecommendations_DESC' |
  'bathtub_ASC' |
  'bathtub_DESC' |
  'changingTable_ASC' |
  'changingTable_DESC' |
  'childrensBooksAndToys_ASC' |
  'childrensBooksAndToys_DESC' |
  'childrensDinnerware_ASC' |
  'childrensDinnerware_DESC' |
  'crib_ASC' |
  'crib_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type LocationOrderByInput =   'id_ASC' |
  'id_DESC' |
  'lat_ASC' |
  'lat_DESC' |
  'lng_ASC' |
  'lng_DESC' |
  'address_ASC' |
  'address_DESC' |
  'directions_ASC' |
  'directions_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type ViewsOrderByInput =   'id_ASC' |
  'id_DESC' |
  'lastWeek_ASC' |
  'lastWeek_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'firstName_ASC' |
  'firstName_DESC' |
  'lastName_ASC' |
  'lastName_DESC' |
  'email_ASC' |
  'email_DESC' |
  'password_ASC' |
  'password_DESC' |
  'phone_ASC' |
  'phone_DESC' |
  'responseRate_ASC' |
  'responseRate_DESC' |
  'responseTime_ASC' |
  'responseTime_DESC' |
  'isSuperHost_ASC' |
  'isSuperHost_DESC'

export type PAYMENT_PROVIDER =   'PAYPAL' |
  'CREDIT_CARD'

export type PlaceOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'size_ASC' |
  'size_DESC' |
  'shortDescription_ASC' |
  'shortDescription_DESC' |
  'description_ASC' |
  'description_DESC' |
  'slug_ASC' |
  'slug_DESC' |
  'maxGuests_ASC' |
  'maxGuests_DESC' |
  'numBedrooms_ASC' |
  'numBedrooms_DESC' |
  'numBeds_ASC' |
  'numBeds_DESC' |
  'numBaths_ASC' |
  'numBaths_DESC' |
  'popularity_ASC' |
  'popularity_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type ReviewOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'text_ASC' |
  'text_DESC' |
  'stars_ASC' |
  'stars_DESC' |
  'accuracy_ASC' |
  'accuracy_DESC' |
  'location_ASC' |
  'location_DESC' |
  'checkIn_ASC' |
  'checkIn_DESC' |
  'value_ASC' |
  'value_DESC' |
  'cleanliness_ASC' |
  'cleanliness_DESC' |
  'communication_ASC' |
  'communication_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type PoliciesOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'checkInStartTime_ASC' |
  'checkInStartTime_DESC' |
  'checkInEndTime_ASC' |
  'checkInEndTime_DESC' |
  'checkoutTime_ASC' |
  'checkoutTime_DESC'

export type PLACE_SIZES =   'ENTIRE_HOUSE' |
  'ENTIRE_APARTMENT' |
  'ENTIRE_EARTH_HOUSE' |
  'ENTIRE_CABIN' |
  'ENTIRE_VILLA' |
  'ENTIRE_PLACE' |
  'ENTIRE_BOAT' |
  'PRIVATE_ROOM'

export type CreditCardInformationOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'cardNumber_ASC' |
  'cardNumber_DESC' |
  'expiresOnMonth_ASC' |
  'expiresOnMonth_DESC' |
  'expiresOnYear_ASC' |
  'expiresOnYear_DESC' |
  'securityCode_ASC' |
  'securityCode_DESC' |
  'firstName_ASC' |
  'firstName_DESC' |
  'lastName_ASC' |
  'lastName_DESC' |
  'postalCode_ASC' |
  'postalCode_DESC' |
  'country_ASC' |
  'country_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type PricingOrderByInput =   'id_ASC' |
  'id_DESC' |
  'monthlyDiscount_ASC' |
  'monthlyDiscount_DESC' |
  'weeklyDiscount_ASC' |
  'weeklyDiscount_DESC' |
  'perNight_ASC' |
  'perNight_DESC' |
  'smartPricing_ASC' |
  'smartPricing_DESC' |
  'basePrice_ASC' |
  'basePrice_DESC' |
  'averageWeekly_ASC' |
  'averageWeekly_DESC' |
  'averageMonthly_ASC' |
  'averageMonthly_DESC' |
  'cleaningFee_ASC' |
  'cleaningFee_DESC' |
  'securityDeposit_ASC' |
  'securityDeposit_DESC' |
  'extraGuests_ASC' |
  'extraGuests_DESC' |
  'weekendPricing_ASC' |
  'weekendPricing_DESC' |
  'currency_ASC' |
  'currency_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export interface BookingCreateInput {
  startDate: DateTime
  endDate: DateTime
  bookee: UserCreateOneWithoutBookingsInput
  place: PlaceCreateOneWithoutBookingsInput
  payment: PaymentCreateOneWithoutBookingInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  NOT?: UserWhereInput[] | UserWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  firstName?: String
  firstName_not?: String
  firstName_in?: String[] | String
  firstName_not_in?: String[] | String
  firstName_lt?: String
  firstName_lte?: String
  firstName_gt?: String
  firstName_gte?: String
  firstName_contains?: String
  firstName_not_contains?: String
  firstName_starts_with?: String
  firstName_not_starts_with?: String
  firstName_ends_with?: String
  firstName_not_ends_with?: String
  lastName?: String
  lastName_not?: String
  lastName_in?: String[] | String
  lastName_not_in?: String[] | String
  lastName_lt?: String
  lastName_lte?: String
  lastName_gt?: String
  lastName_gte?: String
  lastName_contains?: String
  lastName_not_contains?: String
  lastName_starts_with?: String
  lastName_not_starts_with?: String
  lastName_ends_with?: String
  lastName_not_ends_with?: String
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  password?: String
  password_not?: String
  password_in?: String[] | String
  password_not_in?: String[] | String
  password_lt?: String
  password_lte?: String
  password_gt?: String
  password_gte?: String
  password_contains?: String
  password_not_contains?: String
  password_starts_with?: String
  password_not_starts_with?: String
  password_ends_with?: String
  password_not_ends_with?: String
  phone?: String
  phone_not?: String
  phone_in?: String[] | String
  phone_not_in?: String[] | String
  phone_lt?: String
  phone_lte?: String
  phone_gt?: String
  phone_gte?: String
  phone_contains?: String
  phone_not_contains?: String
  phone_starts_with?: String
  phone_not_starts_with?: String
  phone_ends_with?: String
  phone_not_ends_with?: String
  responseRate?: Float
  responseRate_not?: Float
  responseRate_in?: Float[] | Float
  responseRate_not_in?: Float[] | Float
  responseRate_lt?: Float
  responseRate_lte?: Float
  responseRate_gt?: Float
  responseRate_gte?: Float
  responseTime?: Int
  responseTime_not?: Int
  responseTime_in?: Int[] | Int
  responseTime_not_in?: Int[] | Int
  responseTime_lt?: Int
  responseTime_lte?: Int
  responseTime_gt?: Int
  responseTime_gte?: Int
  isSuperHost?: Boolean
  isSuperHost_not?: Boolean
  ownedPlaces_every?: PlaceWhereInput
  ownedPlaces_some?: PlaceWhereInput
  ownedPlaces_none?: PlaceWhereInput
  location?: LocationWhereInput
  bookings_every?: BookingWhereInput
  bookings_some?: BookingWhereInput
  bookings_none?: BookingWhereInput
  paymentAccount_every?: PaymentAccountWhereInput
  paymentAccount_some?: PaymentAccountWhereInput
  paymentAccount_none?: PaymentAccountWhereInput
  sentMessages_every?: MessageWhereInput
  sentMessages_some?: MessageWhereInput
  sentMessages_none?: MessageWhereInput
  receivedMessages_every?: MessageWhereInput
  receivedMessages_some?: MessageWhereInput
  receivedMessages_none?: MessageWhereInput
  notifications_every?: NotificationWhereInput
  notifications_some?: NotificationWhereInput
  notifications_none?: NotificationWhereInput
  profilePicture?: PictureWhereInput
  hostingExperiences_every?: ExperienceWhereInput
  hostingExperiences_some?: ExperienceWhereInput
  hostingExperiences_none?: ExperienceWhereInput
}

export interface LocationCreateWithoutRestaurantInput {
  lat: Float
  lng: Float
  address?: String
  directions?: String
  neighbourHood?: NeighbourhoodCreateOneWithoutLocationsInput
  user?: UserCreateOneWithoutLocationInput
  place?: PlaceCreateOneWithoutLocationInput
  experience?: ExperienceCreateOneWithoutLocationInput
}

export interface MessageWhereInput {
  AND?: MessageWhereInput[] | MessageWhereInput
  OR?: MessageWhereInput[] | MessageWhereInput
  NOT?: MessageWhereInput[] | MessageWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  deliveredAt?: DateTime
  deliveredAt_not?: DateTime
  deliveredAt_in?: DateTime[] | DateTime
  deliveredAt_not_in?: DateTime[] | DateTime
  deliveredAt_lt?: DateTime
  deliveredAt_lte?: DateTime
  deliveredAt_gt?: DateTime
  deliveredAt_gte?: DateTime
  readAt?: DateTime
  readAt_not?: DateTime
  readAt_in?: DateTime[] | DateTime
  readAt_not_in?: DateTime[] | DateTime
  readAt_lt?: DateTime
  readAt_lte?: DateTime
  readAt_gt?: DateTime
  readAt_gte?: DateTime
  from?: UserWhereInput
  to?: UserWhereInput
}

export interface UserUpdateInput {
  firstName?: String
  lastName?: String
  email?: String
  password?: String
  phone?: String
  responseRate?: Float
  responseTime?: Int
  isSuperHost?: Boolean
  ownedPlaces?: PlaceUpdateManyWithoutHostInput
  location?: LocationUpdateOneWithoutUserInput
  bookings?: BookingUpdateManyWithoutBookeeInput
  paymentAccount?: PaymentAccountUpdateManyWithoutUserInput
  sentMessages?: MessageUpdateManyWithoutFromInput
  receivedMessages?: MessageUpdateManyWithoutToInput
  notifications?: NotificationUpdateManyWithoutUserInput
  profilePicture?: PictureUpdateOneInput
  hostingExperiences?: ExperienceUpdateManyWithoutHostInput
}

export interface CreditCardInformationWhereInput {
  AND?: CreditCardInformationWhereInput[] | CreditCardInformationWhereInput
  OR?: CreditCardInformationWhereInput[] | CreditCardInformationWhereInput
  NOT?: CreditCardInformationWhereInput[] | CreditCardInformationWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  cardNumber?: String
  cardNumber_not?: String
  cardNumber_in?: String[] | String
  cardNumber_not_in?: String[] | String
  cardNumber_lt?: String
  cardNumber_lte?: String
  cardNumber_gt?: String
  cardNumber_gte?: String
  cardNumber_contains?: String
  cardNumber_not_contains?: String
  cardNumber_starts_with?: String
  cardNumber_not_starts_with?: String
  cardNumber_ends_with?: String
  cardNumber_not_ends_with?: String
  expiresOnMonth?: Int
  expiresOnMonth_not?: Int
  expiresOnMonth_in?: Int[] | Int
  expiresOnMonth_not_in?: Int[] | Int
  expiresOnMonth_lt?: Int
  expiresOnMonth_lte?: Int
  expiresOnMonth_gt?: Int
  expiresOnMonth_gte?: Int
  expiresOnYear?: Int
  expiresOnYear_not?: Int
  expiresOnYear_in?: Int[] | Int
  expiresOnYear_not_in?: Int[] | Int
  expiresOnYear_lt?: Int
  expiresOnYear_lte?: Int
  expiresOnYear_gt?: Int
  expiresOnYear_gte?: Int
  securityCode?: String
  securityCode_not?: String
  securityCode_in?: String[] | String
  securityCode_not_in?: String[] | String
  securityCode_lt?: String
  securityCode_lte?: String
  securityCode_gt?: String
  securityCode_gte?: String
  securityCode_contains?: String
  securityCode_not_contains?: String
  securityCode_starts_with?: String
  securityCode_not_starts_with?: String
  securityCode_ends_with?: String
  securityCode_not_ends_with?: String
  firstName?: String
  firstName_not?: String
  firstName_in?: String[] | String
  firstName_not_in?: String[] | String
  firstName_lt?: String
  firstName_lte?: String
  firstName_gt?: String
  firstName_gte?: String
  firstName_contains?: String
  firstName_not_contains?: String
  firstName_starts_with?: String
  firstName_not_starts_with?: String
  firstName_ends_with?: String
  firstName_not_ends_with?: String
  lastName?: String
  lastName_not?: String
  lastName_in?: String[] | String
  lastName_not_in?: String[] | String
  lastName_lt?: String
  lastName_lte?: String
  lastName_gt?: String
  lastName_gte?: String
  lastName_contains?: String
  lastName_not_contains?: String
  lastName_starts_with?: String
  lastName_not_starts_with?: String
  lastName_ends_with?: String
  lastName_not_ends_with?: String
  postalCode?: String
  postalCode_not?: String
  postalCode_in?: String[] | String
  postalCode_not_in?: String[] | String
  postalCode_lt?: String
  postalCode_lte?: String
  postalCode_gt?: String
  postalCode_gte?: String
  postalCode_contains?: String
  postalCode_not_contains?: String
  postalCode_starts_with?: String
  postalCode_not_starts_with?: String
  postalCode_ends_with?: String
  postalCode_not_ends_with?: String
  country?: String
  country_not?: String
  country_in?: String[] | String
  country_not_in?: String[] | String
  country_lt?: String
  country_lte?: String
  country_gt?: String
  country_gte?: String
  country_contains?: String
  country_not_contains?: String
  country_starts_with?: String
  country_not_starts_with?: String
  country_ends_with?: String
  country_not_ends_with?: String
  paymentAccount?: PaymentAccountWhereInput
}

export interface PlaceCreateWithoutReviewsInput {
  name?: String
  size?: PLACE_SIZES
  shortDescription: String
  description: String
  slug: String
  maxGuests: Int
  numBedrooms: Int
  numBeds: Int
  numBaths: Int
  popularity: Int
  amenities: AmenitiesCreateOneWithoutPlaceInput
  host: UserCreateOneWithoutOwnedPlacesInput
  pricing: PricingCreateOneWithoutPlaceInput
  location: LocationCreateOneWithoutPlaceInput
  views: ViewsCreateOneWithoutPlaceInput
  guestRequirements?: GuestRequirementsCreateOneWithoutPlaceInput
  policies?: PoliciesCreateOneWithoutPlaceInput
  houseRules?: HouseRulesCreateOneInput
  bookings?: BookingCreateManyWithoutPlaceInput
  pictures?: PictureCreateManyInput
}

export interface PaymentAccountUpsertWithWhereUniqueWithoutUserInput {
  where: PaymentAccountWhereUniqueInput
  update: PaymentAccountUpdateWithoutUserDataInput
  create: PaymentAccountCreateWithoutUserInput
}

export interface ViewsCreateOneWithoutPlaceInput {
  create?: ViewsCreateWithoutPlaceInput
  connect?: ViewsWhereUniqueInput
}

export interface PlaceUpdateManyWithoutHostInput {
  create?: PlaceCreateWithoutHostInput[] | PlaceCreateWithoutHostInput
  connect?: PlaceWhereUniqueInput[] | PlaceWhereUniqueInput
  disconnect?: PlaceWhereUniqueInput[] | PlaceWhereUniqueInput
  delete?: PlaceWhereUniqueInput[] | PlaceWhereUniqueInput
  update?: PlaceUpdateWithWhereUniqueWithoutHostInput[] | PlaceUpdateWithWhereUniqueWithoutHostInput
  upsert?: PlaceUpsertWithWhereUniqueWithoutHostInput[] | PlaceUpsertWithWhereUniqueWithoutHostInput
}

export interface ViewsCreateWithoutPlaceInput {
  lastWeek: Int
}

export interface RestaurantSubscriptionWhereInput {
  AND?: RestaurantSubscriptionWhereInput[] | RestaurantSubscriptionWhereInput
  OR?: RestaurantSubscriptionWhereInput[] | RestaurantSubscriptionWhereInput
  NOT?: RestaurantSubscriptionWhereInput[] | RestaurantSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: RestaurantWhereInput
}

export interface GuestRequirementsCreateOneWithoutPlaceInput {
  create?: GuestRequirementsCreateWithoutPlaceInput
  connect?: GuestRequirementsWhereUniqueInput
}

export interface NotificationSubscriptionWhereInput {
  AND?: NotificationSubscriptionWhereInput[] | NotificationSubscriptionWhereInput
  OR?: NotificationSubscriptionWhereInput[] | NotificationSubscriptionWhereInput
  NOT?: NotificationSubscriptionWhereInput[] | NotificationSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: NotificationWhereInput
}

export interface GuestRequirementsCreateWithoutPlaceInput {
  govIssuedId?: Boolean
  recommendationsFromOtherHosts?: Boolean
  guestTripInformation?: Boolean
}

export interface CreditCardInformationSubscriptionWhereInput {
  AND?: CreditCardInformationSubscriptionWhereInput[] | CreditCardInformationSubscriptionWhereInput
  OR?: CreditCardInformationSubscriptionWhereInput[] | CreditCardInformationSubscriptionWhereInput
  NOT?: CreditCardInformationSubscriptionWhereInput[] | CreditCardInformationSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: CreditCardInformationWhereInput
}

export interface PoliciesCreateOneWithoutPlaceInput {
  create?: PoliciesCreateWithoutPlaceInput
  connect?: PoliciesWhereUniqueInput
}

export interface PaymentAccountSubscriptionWhereInput {
  AND?: PaymentAccountSubscriptionWhereInput[] | PaymentAccountSubscriptionWhereInput
  OR?: PaymentAccountSubscriptionWhereInput[] | PaymentAccountSubscriptionWhereInput
  NOT?: PaymentAccountSubscriptionWhereInput[] | PaymentAccountSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: PaymentAccountWhereInput
}

export interface PoliciesCreateWithoutPlaceInput {
  checkInStartTime: Float
  checkInEndTime: Float
  checkoutTime: Float
}

export interface PaymentSubscriptionWhereInput {
  AND?: PaymentSubscriptionWhereInput[] | PaymentSubscriptionWhereInput
  OR?: PaymentSubscriptionWhereInput[] | PaymentSubscriptionWhereInput
  NOT?: PaymentSubscriptionWhereInput[] | PaymentSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: PaymentWhereInput
}

export interface HouseRulesCreateOneInput {
  create?: HouseRulesCreateInput
  connect?: HouseRulesWhereUniqueInput
}

export interface HouseRulesWhereInput {
  AND?: HouseRulesWhereInput[] | HouseRulesWhereInput
  OR?: HouseRulesWhereInput[] | HouseRulesWhereInput
  NOT?: HouseRulesWhereInput[] | HouseRulesWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  suitableForChildren?: Boolean
  suitableForChildren_not?: Boolean
  suitableForInfants?: Boolean
  suitableForInfants_not?: Boolean
  petsAllowed?: Boolean
  petsAllowed_not?: Boolean
  smokingAllowed?: Boolean
  smokingAllowed_not?: Boolean
  partiesAndEventsAllowed?: Boolean
  partiesAndEventsAllowed_not?: Boolean
  additionalRules?: String
  additionalRules_not?: String
  additionalRules_in?: String[] | String
  additionalRules_not_in?: String[] | String
  additionalRules_lt?: String
  additionalRules_lte?: String
  additionalRules_gt?: String
  additionalRules_gte?: String
  additionalRules_contains?: String
  additionalRules_not_contains?: String
  additionalRules_starts_with?: String
  additionalRules_not_starts_with?: String
  additionalRules_ends_with?: String
  additionalRules_not_ends_with?: String
}

export interface HouseRulesCreateInput {
  suitableForChildren?: Boolean
  suitableForInfants?: Boolean
  petsAllowed?: Boolean
  smokingAllowed?: Boolean
  partiesAndEventsAllowed?: Boolean
  additionalRules?: String
}

export interface PoliciesWhereInput {
  AND?: PoliciesWhereInput[] | PoliciesWhereInput
  OR?: PoliciesWhereInput[] | PoliciesWhereInput
  NOT?: PoliciesWhereInput[] | PoliciesWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  checkInStartTime?: Float
  checkInStartTime_not?: Float
  checkInStartTime_in?: Float[] | Float
  checkInStartTime_not_in?: Float[] | Float
  checkInStartTime_lt?: Float
  checkInStartTime_lte?: Float
  checkInStartTime_gt?: Float
  checkInStartTime_gte?: Float
  checkInEndTime?: Float
  checkInEndTime_not?: Float
  checkInEndTime_in?: Float[] | Float
  checkInEndTime_not_in?: Float[] | Float
  checkInEndTime_lt?: Float
  checkInEndTime_lte?: Float
  checkInEndTime_gt?: Float
  checkInEndTime_gte?: Float
  checkoutTime?: Float
  checkoutTime_not?: Float
  checkoutTime_in?: Float[] | Float
  checkoutTime_not_in?: Float[] | Float
  checkoutTime_lt?: Float
  checkoutTime_lte?: Float
  checkoutTime_gt?: Float
  checkoutTime_gte?: Float
  place?: PlaceWhereInput
}

export interface BookingCreateManyWithoutPlaceInput {
  create?: BookingCreateWithoutPlaceInput[] | BookingCreateWithoutPlaceInput
  connect?: BookingWhereUniqueInput[] | BookingWhereUniqueInput
}

export interface ExperienceCategorySubscriptionWhereInput {
  AND?: ExperienceCategorySubscriptionWhereInput[] | ExperienceCategorySubscriptionWhereInput
  OR?: ExperienceCategorySubscriptionWhereInput[] | ExperienceCategorySubscriptionWhereInput
  NOT?: ExperienceCategorySubscriptionWhereInput[] | ExperienceCategorySubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ExperienceCategoryWhereInput
}

export interface BookingCreateWithoutPlaceInput {
  startDate: DateTime
  endDate: DateTime
  bookee: UserCreateOneWithoutBookingsInput
  payment: PaymentCreateOneWithoutBookingInput
}

export interface PictureSubscriptionWhereInput {
  AND?: PictureSubscriptionWhereInput[] | PictureSubscriptionWhereInput
  OR?: PictureSubscriptionWhereInput[] | PictureSubscriptionWhereInput
  NOT?: PictureSubscriptionWhereInput[] | PictureSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: PictureWhereInput
}

export interface PaymentCreateOneWithoutBookingInput {
  create?: PaymentCreateWithoutBookingInput
  connect?: PaymentWhereUniqueInput
}

export interface NeighbourhoodSubscriptionWhereInput {
  AND?: NeighbourhoodSubscriptionWhereInput[] | NeighbourhoodSubscriptionWhereInput
  OR?: NeighbourhoodSubscriptionWhereInput[] | NeighbourhoodSubscriptionWhereInput
  NOT?: NeighbourhoodSubscriptionWhereInput[] | NeighbourhoodSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: NeighbourhoodWhereInput
}

export interface PaymentCreateWithoutBookingInput {
  serviceFee: Float
  placePrice: Float
  totalPrice: Float
  paymentMethod: PaymentAccountCreateOneWithoutPaymentsInput
}

export interface LocationSubscriptionWhereInput {
  AND?: LocationSubscriptionWhereInput[] | LocationSubscriptionWhereInput
  OR?: LocationSubscriptionWhereInput[] | LocationSubscriptionWhereInput
  NOT?: LocationSubscriptionWhereInput[] | LocationSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: LocationWhereInput
}

export interface PaymentAccountCreateOneWithoutPaymentsInput {
  create?: PaymentAccountCreateWithoutPaymentsInput
  connect?: PaymentAccountWhereUniqueInput
}

export interface HouseRulesSubscriptionWhereInput {
  AND?: HouseRulesSubscriptionWhereInput[] | HouseRulesSubscriptionWhereInput
  OR?: HouseRulesSubscriptionWhereInput[] | HouseRulesSubscriptionWhereInput
  NOT?: HouseRulesSubscriptionWhereInput[] | HouseRulesSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: HouseRulesWhereInput
}

export interface PaymentAccountCreateWithoutPaymentsInput {
  type?: PAYMENT_PROVIDER
  user: UserCreateOneWithoutPaymentAccountInput
  paypal?: PaypalInformationCreateOneWithoutPaymentAccountInput
  creditcard?: CreditCardInformationCreateOneWithoutPaymentAccountInput
}

export interface PoliciesSubscriptionWhereInput {
  AND?: PoliciesSubscriptionWhereInput[] | PoliciesSubscriptionWhereInput
  OR?: PoliciesSubscriptionWhereInput[] | PoliciesSubscriptionWhereInput
  NOT?: PoliciesSubscriptionWhereInput[] | PoliciesSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: PoliciesWhereInput
}

export interface UserCreateOneWithoutPaymentAccountInput {
  create?: UserCreateWithoutPaymentAccountInput
  connect?: UserWhereUniqueInput
}

export interface PricingWhereInput {
  AND?: PricingWhereInput[] | PricingWhereInput
  OR?: PricingWhereInput[] | PricingWhereInput
  NOT?: PricingWhereInput[] | PricingWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  monthlyDiscount?: Int
  monthlyDiscount_not?: Int
  monthlyDiscount_in?: Int[] | Int
  monthlyDiscount_not_in?: Int[] | Int
  monthlyDiscount_lt?: Int
  monthlyDiscount_lte?: Int
  monthlyDiscount_gt?: Int
  monthlyDiscount_gte?: Int
  weeklyDiscount?: Int
  weeklyDiscount_not?: Int
  weeklyDiscount_in?: Int[] | Int
  weeklyDiscount_not_in?: Int[] | Int
  weeklyDiscount_lt?: Int
  weeklyDiscount_lte?: Int
  weeklyDiscount_gt?: Int
  weeklyDiscount_gte?: Int
  perNight?: Int
  perNight_not?: Int
  perNight_in?: Int[] | Int
  perNight_not_in?: Int[] | Int
  perNight_lt?: Int
  perNight_lte?: Int
  perNight_gt?: Int
  perNight_gte?: Int
  smartPricing?: Boolean
  smartPricing_not?: Boolean
  basePrice?: Int
  basePrice_not?: Int
  basePrice_in?: Int[] | Int
  basePrice_not_in?: Int[] | Int
  basePrice_lt?: Int
  basePrice_lte?: Int
  basePrice_gt?: Int
  basePrice_gte?: Int
  averageWeekly?: Int
  averageWeekly_not?: Int
  averageWeekly_in?: Int[] | Int
  averageWeekly_not_in?: Int[] | Int
  averageWeekly_lt?: Int
  averageWeekly_lte?: Int
  averageWeekly_gt?: Int
  averageWeekly_gte?: Int
  averageMonthly?: Int
  averageMonthly_not?: Int
  averageMonthly_in?: Int[] | Int
  averageMonthly_not_in?: Int[] | Int
  averageMonthly_lt?: Int
  averageMonthly_lte?: Int
  averageMonthly_gt?: Int
  averageMonthly_gte?: Int
  cleaningFee?: Int
  cleaningFee_not?: Int
  cleaningFee_in?: Int[] | Int
  cleaningFee_not_in?: Int[] | Int
  cleaningFee_lt?: Int
  cleaningFee_lte?: Int
  cleaningFee_gt?: Int
  cleaningFee_gte?: Int
  securityDeposit?: Int
  securityDeposit_not?: Int
  securityDeposit_in?: Int[] | Int
  securityDeposit_not_in?: Int[] | Int
  securityDeposit_lt?: Int
  securityDeposit_lte?: Int
  securityDeposit_gt?: Int
  securityDeposit_gte?: Int
  extraGuests?: Int
  extraGuests_not?: Int
  extraGuests_in?: Int[] | Int
  extraGuests_not_in?: Int[] | Int
  extraGuests_lt?: Int
  extraGuests_lte?: Int
  extraGuests_gt?: Int
  extraGuests_gte?: Int
  weekendPricing?: Int
  weekendPricing_not?: Int
  weekendPricing_in?: Int[] | Int
  weekendPricing_not_in?: Int[] | Int
  weekendPricing_lt?: Int
  weekendPricing_lte?: Int
  weekendPricing_gt?: Int
  weekendPricing_gte?: Int
  currency?: CURRENCY
  currency_not?: CURRENCY
  currency_in?: CURRENCY[] | CURRENCY
  currency_not_in?: CURRENCY[] | CURRENCY
  place?: PlaceWhereInput
}

export interface UserCreateWithoutPaymentAccountInput {
  firstName: String
  lastName: String
  email: String
  password: String
  phone: String
  responseRate?: Float
  responseTime?: Int
  isSuperHost?: Boolean
  ownedPlaces?: PlaceCreateManyWithoutHostInput
  location?: LocationCreateOneWithoutUserInput
  bookings?: BookingCreateManyWithoutBookeeInput
  sentMessages?: MessageCreateManyWithoutFromInput
  receivedMessages?: MessageCreateManyWithoutToInput
  notifications?: NotificationCreateManyWithoutUserInput
  profilePicture?: PictureCreateOneInput
  hostingExperiences?: ExperienceCreateManyWithoutHostInput
}

export interface PricingSubscriptionWhereInput {
  AND?: PricingSubscriptionWhereInput[] | PricingSubscriptionWhereInput
  OR?: PricingSubscriptionWhereInput[] | PricingSubscriptionWhereInput
  NOT?: PricingSubscriptionWhereInput[] | PricingSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: PricingWhereInput
}

export interface MessageCreateManyWithoutToInput {
  create?: MessageCreateWithoutToInput[] | MessageCreateWithoutToInput
  connect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput
}

export interface PlaceSubscriptionWhereInput {
  AND?: PlaceSubscriptionWhereInput[] | PlaceSubscriptionWhereInput
  OR?: PlaceSubscriptionWhereInput[] | PlaceSubscriptionWhereInput
  NOT?: PlaceSubscriptionWhereInput[] | PlaceSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: PlaceWhereInput
}

export interface MessageCreateWithoutToInput {
  deliveredAt: DateTime
  readAt: DateTime
  from: UserCreateOneWithoutSentMessagesInput
}

export interface PictureWhereInput {
  AND?: PictureWhereInput[] | PictureWhereInput
  OR?: PictureWhereInput[] | PictureWhereInput
  NOT?: PictureWhereInput[] | PictureWhereInput
  url?: String
  url_not?: String
  url_in?: String[] | String
  url_not_in?: String[] | String
  url_lt?: String
  url_lte?: String
  url_gt?: String
  url_gte?: String
  url_contains?: String
  url_not_contains?: String
  url_starts_with?: String
  url_not_starts_with?: String
  url_ends_with?: String
  url_not_ends_with?: String
}

export interface UserCreateOneWithoutSentMessagesInput {
  create?: UserCreateWithoutSentMessagesInput
  connect?: UserWhereUniqueInput
}

export interface LocationWhereInput {
  AND?: LocationWhereInput[] | LocationWhereInput
  OR?: LocationWhereInput[] | LocationWhereInput
  NOT?: LocationWhereInput[] | LocationWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  lat?: Float
  lat_not?: Float
  lat_in?: Float[] | Float
  lat_not_in?: Float[] | Float
  lat_lt?: Float
  lat_lte?: Float
  lat_gt?: Float
  lat_gte?: Float
  lng?: Float
  lng_not?: Float
  lng_in?: Float[] | Float
  lng_not_in?: Float[] | Float
  lng_lt?: Float
  lng_lte?: Float
  lng_gt?: Float
  lng_gte?: Float
  address?: String
  address_not?: String
  address_in?: String[] | String
  address_not_in?: String[] | String
  address_lt?: String
  address_lte?: String
  address_gt?: String
  address_gte?: String
  address_contains?: String
  address_not_contains?: String
  address_starts_with?: String
  address_not_starts_with?: String
  address_ends_with?: String
  address_not_ends_with?: String
  directions?: String
  directions_not?: String
  directions_in?: String[] | String
  directions_not_in?: String[] | String
  directions_lt?: String
  directions_lte?: String
  directions_gt?: String
  directions_gte?: String
  directions_contains?: String
  directions_not_contains?: String
  directions_starts_with?: String
  directions_not_starts_with?: String
  directions_ends_with?: String
  directions_not_ends_with?: String
  neighbourHood?: NeighbourhoodWhereInput
  user?: UserWhereInput
  place?: PlaceWhereInput
  experience?: ExperienceWhereInput
  restaurant?: RestaurantWhereInput
}

export interface UserCreateWithoutSentMessagesInput {
  firstName: String
  lastName: String
  email: String
  password: String
  phone: String
  responseRate?: Float
  responseTime?: Int
  isSuperHost?: Boolean
  ownedPlaces?: PlaceCreateManyWithoutHostInput
  location?: LocationCreateOneWithoutUserInput
  bookings?: BookingCreateManyWithoutBookeeInput
  paymentAccount?: PaymentAccountCreateManyWithoutUserInput
  receivedMessages?: MessageCreateManyWithoutToInput
  notifications?: NotificationCreateManyWithoutUserInput
  profilePicture?: PictureCreateOneInput
  hostingExperiences?: ExperienceCreateManyWithoutHostInput
}

export interface ExperienceWhereInput {
  AND?: ExperienceWhereInput[] | ExperienceWhereInput
  OR?: ExperienceWhereInput[] | ExperienceWhereInput
  NOT?: ExperienceWhereInput[] | ExperienceWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  title?: String
  title_not?: String
  title_in?: String[] | String
  title_not_in?: String[] | String
  title_lt?: String
  title_lte?: String
  title_gt?: String
  title_gte?: String
  title_contains?: String
  title_not_contains?: String
  title_starts_with?: String
  title_not_starts_with?: String
  title_ends_with?: String
  title_not_ends_with?: String
  pricePerPerson?: Int
  pricePerPerson_not?: Int
  pricePerPerson_in?: Int[] | Int
  pricePerPerson_not_in?: Int[] | Int
  pricePerPerson_lt?: Int
  pricePerPerson_lte?: Int
  pricePerPerson_gt?: Int
  pricePerPerson_gte?: Int
  popularity?: Int
  popularity_not?: Int
  popularity_in?: Int[] | Int
  popularity_not_in?: Int[] | Int
  popularity_lt?: Int
  popularity_lte?: Int
  popularity_gt?: Int
  popularity_gte?: Int
  category?: ExperienceCategoryWhereInput
  host?: UserWhereInput
  location?: LocationWhereInput
  reviews_every?: ReviewWhereInput
  reviews_some?: ReviewWhereInput
  reviews_none?: ReviewWhereInput
  preview?: PictureWhereInput
}

export interface PaypalInformationCreateOneWithoutPaymentAccountInput {
  create?: PaypalInformationCreateWithoutPaymentAccountInput
  connect?: PaypalInformationWhereUniqueInput
}

export interface PlaceWhereInput {
  AND?: PlaceWhereInput[] | PlaceWhereInput
  OR?: PlaceWhereInput[] | PlaceWhereInput
  NOT?: PlaceWhereInput[] | PlaceWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  size?: PLACE_SIZES
  size_not?: PLACE_SIZES
  size_in?: PLACE_SIZES[] | PLACE_SIZES
  size_not_in?: PLACE_SIZES[] | PLACE_SIZES
  shortDescription?: String
  shortDescription_not?: String
  shortDescription_in?: String[] | String
  shortDescription_not_in?: String[] | String
  shortDescription_lt?: String
  shortDescription_lte?: String
  shortDescription_gt?: String
  shortDescription_gte?: String
  shortDescription_contains?: String
  shortDescription_not_contains?: String
  shortDescription_starts_with?: String
  shortDescription_not_starts_with?: String
  shortDescription_ends_with?: String
  shortDescription_not_ends_with?: String
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
  slug?: String
  slug_not?: String
  slug_in?: String[] | String
  slug_not_in?: String[] | String
  slug_lt?: String
  slug_lte?: String
  slug_gt?: String
  slug_gte?: String
  slug_contains?: String
  slug_not_contains?: String
  slug_starts_with?: String
  slug_not_starts_with?: String
  slug_ends_with?: String
  slug_not_ends_with?: String
  maxGuests?: Int
  maxGuests_not?: Int
  maxGuests_in?: Int[] | Int
  maxGuests_not_in?: Int[] | Int
  maxGuests_lt?: Int
  maxGuests_lte?: Int
  maxGuests_gt?: Int
  maxGuests_gte?: Int
  numBedrooms?: Int
  numBedrooms_not?: Int
  numBedrooms_in?: Int[] | Int
  numBedrooms_not_in?: Int[] | Int
  numBedrooms_lt?: Int
  numBedrooms_lte?: Int
  numBedrooms_gt?: Int
  numBedrooms_gte?: Int
  numBeds?: Int
  numBeds_not?: Int
  numBeds_in?: Int[] | Int
  numBeds_not_in?: Int[] | Int
  numBeds_lt?: Int
  numBeds_lte?: Int
  numBeds_gt?: Int
  numBeds_gte?: Int
  numBaths?: Int
  numBaths_not?: Int
  numBaths_in?: Int[] | Int
  numBaths_not_in?: Int[] | Int
  numBaths_lt?: Int
  numBaths_lte?: Int
  numBaths_gt?: Int
  numBaths_gte?: Int
  popularity?: Int
  popularity_not?: Int
  popularity_in?: Int[] | Int
  popularity_not_in?: Int[] | Int
  popularity_lt?: Int
  popularity_lte?: Int
  popularity_gt?: Int
  popularity_gte?: Int
  reviews_every?: ReviewWhereInput
  reviews_some?: ReviewWhereInput
  reviews_none?: ReviewWhereInput
  amenities?: AmenitiesWhereInput
  host?: UserWhereInput
  pricing?: PricingWhereInput
  location?: LocationWhereInput
  views?: ViewsWhereInput
  guestRequirements?: GuestRequirementsWhereInput
  policies?: PoliciesWhereInput
  houseRules?: HouseRulesWhereInput
  bookings_every?: BookingWhereInput
  bookings_some?: BookingWhereInput
  bookings_none?: BookingWhereInput
  pictures_every?: PictureWhereInput
  pictures_some?: PictureWhereInput
  pictures_none?: PictureWhereInput
}

export interface PaypalInformationCreateWithoutPaymentAccountInput {
  email: String
}

export interface PictureUpdateInput {
  url?: String
}

export interface CreditCardInformationCreateOneWithoutPaymentAccountInput {
  create?: CreditCardInformationCreateWithoutPaymentAccountInput
  connect?: CreditCardInformationWhereUniqueInput
}

export interface LocationUpdateWithoutRestaurantDataInput {
  lat?: Float
  lng?: Float
  address?: String
  directions?: String
  neighbourHood?: NeighbourhoodUpdateOneWithoutLocationsInput
  user?: UserUpdateOneWithoutLocationInput
  place?: PlaceUpdateOneWithoutLocationInput
  experience?: ExperienceUpdateOneWithoutLocationInput
}

export interface CreditCardInformationCreateWithoutPaymentAccountInput {
  cardNumber: String
  expiresOnMonth: Int
  expiresOnYear: Int
  securityCode: String
  firstName: String
  lastName: String
  postalCode: String
  country: String
}

export interface PlaceWhereUniqueInput {
  id?: ID_Input
}

export interface ExperienceCreateOneWithoutLocationInput {
  create?: ExperienceCreateWithoutLocationInput
  connect?: ExperienceWhereUniqueInput
}

export interface GuestRequirementsWhereUniqueInput {
  id?: ID_Input
}

export interface ExperienceCreateWithoutLocationInput {
  title: String
  pricePerPerson: Int
  popularity: Int
  category?: ExperienceCategoryCreateOneWithoutExperienceInput
  host: UserCreateOneWithoutHostingExperiencesInput
  reviews?: ReviewCreateManyWithoutExperienceInput
  preview: PictureCreateOneInput
}

export interface HouseRulesWhereUniqueInput {
  id?: ID_Input
}

export interface PlaceCreateInput {
  name?: String
  size?: PLACE_SIZES
  shortDescription: String
  description: String
  slug: String
  maxGuests: Int
  numBedrooms: Int
  numBeds: Int
  numBaths: Int
  popularity: Int
  reviews?: ReviewCreateManyWithoutPlaceInput
  amenities: AmenitiesCreateOneWithoutPlaceInput
  host: UserCreateOneWithoutOwnedPlacesInput
  pricing: PricingCreateOneWithoutPlaceInput
  location: LocationCreateOneWithoutPlaceInput
  views: ViewsCreateOneWithoutPlaceInput
  guestRequirements?: GuestRequirementsCreateOneWithoutPlaceInput
  policies?: PoliciesCreateOneWithoutPlaceInput
  houseRules?: HouseRulesCreateOneInput
  bookings?: BookingCreateManyWithoutPlaceInput
  pictures?: PictureCreateManyInput
}

export interface LocationWhereUniqueInput {
  id?: ID_Input
}

export interface PricingCreateInput {
  monthlyDiscount?: Int
  weeklyDiscount?: Int
  perNight: Int
  smartPricing?: Boolean
  basePrice: Int
  averageWeekly: Int
  averageMonthly: Int
  cleaningFee?: Int
  securityDeposit?: Int
  extraGuests?: Int
  weekendPricing?: Int
  currency?: CURRENCY
  place: PlaceCreateOneWithoutPricingInput
}

export interface CityWhereUniqueInput {
  id?: ID_Input
}

export interface PlaceCreateOneWithoutPricingInput {
  create?: PlaceCreateWithoutPricingInput
  connect?: PlaceWhereUniqueInput
}

export interface ExperienceCategoryWhereUniqueInput {
  id?: ID_Input
}

export interface PlaceCreateWithoutPricingInput {
  name?: String
  size?: PLACE_SIZES
  shortDescription: String
  description: String
  slug: String
  maxGuests: Int
  numBedrooms: Int
  numBeds: Int
  numBaths: Int
  popularity: Int
  reviews?: ReviewCreateManyWithoutPlaceInput
  amenities: AmenitiesCreateOneWithoutPlaceInput
  host: UserCreateOneWithoutOwnedPlacesInput
  location: LocationCreateOneWithoutPlaceInput
  views: ViewsCreateOneWithoutPlaceInput
  guestRequirements?: GuestRequirementsCreateOneWithoutPlaceInput
  policies?: PoliciesCreateOneWithoutPlaceInput
  houseRules?: HouseRulesCreateOneInput
  bookings?: BookingCreateManyWithoutPlaceInput
  pictures?: PictureCreateManyInput
}

export interface ReviewWhereUniqueInput {
  id?: ID_Input
}

export interface GuestRequirementsCreateInput {
  govIssuedId?: Boolean
  recommendationsFromOtherHosts?: Boolean
  guestTripInformation?: Boolean
  place: PlaceCreateOneWithoutGuestRequirementsInput
}

export interface PaymentWhereUniqueInput {
  id?: ID_Input
}

export interface PlaceCreateOneWithoutGuestRequirementsInput {
  create?: PlaceCreateWithoutGuestRequirementsInput
  connect?: PlaceWhereUniqueInput
}

export interface PaypalInformationWhereUniqueInput {
  id?: ID_Input
}

export interface PlaceCreateWithoutGuestRequirementsInput {
  name?: String
  size?: PLACE_SIZES
  shortDescription: String
  description: String
  slug: String
  maxGuests: Int
  numBedrooms: Int
  numBeds: Int
  numBaths: Int
  popularity: Int
  reviews?: ReviewCreateManyWithoutPlaceInput
  amenities: AmenitiesCreateOneWithoutPlaceInput
  host: UserCreateOneWithoutOwnedPlacesInput
  pricing: PricingCreateOneWithoutPlaceInput
  location: LocationCreateOneWithoutPlaceInput
  views: ViewsCreateOneWithoutPlaceInput
  policies?: PoliciesCreateOneWithoutPlaceInput
  houseRules?: HouseRulesCreateOneInput
  bookings?: BookingCreateManyWithoutPlaceInput
  pictures?: PictureCreateManyInput
}

export interface MessageWhereUniqueInput {
  id?: ID_Input
}

export interface PoliciesCreateInput {
  checkInStartTime: Float
  checkInEndTime: Float
  checkoutTime: Float
  place: PlaceCreateOneWithoutPoliciesInput
}

export interface RestaurantWhereUniqueInput {
  id?: ID_Input
}

export interface PlaceCreateOneWithoutPoliciesInput {
  create?: PlaceCreateWithoutPoliciesInput
  connect?: PlaceWhereUniqueInput
}

export interface RestaurantUpdateInput {
  title?: String
  avgPricePerPerson?: Int
  isCurated?: Boolean
  slug?: String
  popularity?: Int
  pictures?: PictureUpdateManyInput
  location?: LocationUpdateOneWithoutRestaurantInput
}

export interface PlaceCreateWithoutPoliciesInput {
  name?: String
  size?: PLACE_SIZES
  shortDescription: String
  description: String
  slug: String
  maxGuests: Int
  numBedrooms: Int
  numBeds: Int
  numBaths: Int
  popularity: Int
  reviews?: ReviewCreateManyWithoutPlaceInput
  amenities: AmenitiesCreateOneWithoutPlaceInput
  host: UserCreateOneWithoutOwnedPlacesInput
  pricing: PricingCreateOneWithoutPlaceInput
  location: LocationCreateOneWithoutPlaceInput
  views: ViewsCreateOneWithoutPlaceInput
  guestRequirements?: GuestRequirementsCreateOneWithoutPlaceInput
  houseRules?: HouseRulesCreateOneInput
  bookings?: BookingCreateManyWithoutPlaceInput
  pictures?: PictureCreateManyInput
}

export interface UserUpdateWithoutNotificationsDataInput {
  firstName?: String
  lastName?: String
  email?: String
  password?: String
  phone?: String
  responseRate?: Float
  responseTime?: Int
  isSuperHost?: Boolean
  ownedPlaces?: PlaceUpdateManyWithoutHostInput
  location?: LocationUpdateOneWithoutUserInput
  bookings?: BookingUpdateManyWithoutBookeeInput
  paymentAccount?: PaymentAccountUpdateManyWithoutUserInput
  sentMessages?: MessageUpdateManyWithoutFromInput
  receivedMessages?: MessageUpdateManyWithoutToInput
  profilePicture?: PictureUpdateOneInput
  hostingExperiences?: ExperienceUpdateManyWithoutHostInput
}

export interface ViewsCreateInput {
  lastWeek: Int
  place: PlaceCreateOneWithoutViewsInput
}

export interface NotificationUpdateInput {
  type?: NOTIFICATION_TYPE
  link?: String
  readDate?: DateTime
  user?: UserUpdateOneWithoutNotificationsInput
}

export interface PlaceCreateOneWithoutViewsInput {
  create?: PlaceCreateWithoutViewsInput
  connect?: PlaceWhereUniqueInput
}

export interface PaymentAccountUpsertWithoutCreditcardInput {
  update: PaymentAccountUpdateWithoutCreditcardDataInput
  create: PaymentAccountCreateWithoutCreditcardInput
}

export interface PlaceCreateWithoutViewsInput {
  name?: String
  size?: PLACE_SIZES
  shortDescription: String
  description: String
  slug: String
  maxGuests: Int
  numBedrooms: Int
  numBeds: Int
  numBaths: Int
  popularity: Int
  reviews?: ReviewCreateManyWithoutPlaceInput
  amenities: AmenitiesCreateOneWithoutPlaceInput
  host: UserCreateOneWithoutOwnedPlacesInput
  pricing: PricingCreateOneWithoutPlaceInput
  location: LocationCreateOneWithoutPlaceInput
  guestRequirements?: GuestRequirementsCreateOneWithoutPlaceInput
  policies?: PoliciesCreateOneWithoutPlaceInput
  houseRules?: HouseRulesCreateOneInput
  bookings?: BookingCreateManyWithoutPlaceInput
  pictures?: PictureCreateManyInput
}

export interface PaymentAccountUpdateOneWithoutCreditcardInput {
  create?: PaymentAccountCreateWithoutCreditcardInput
  connect?: PaymentAccountWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: PaymentAccountUpdateWithoutCreditcardDataInput
  upsert?: PaymentAccountUpsertWithoutCreditcardInput
}

export interface LocationCreateInput {
  lat: Float
  lng: Float
  address?: String
  directions?: String
  neighbourHood?: NeighbourhoodCreateOneWithoutLocationsInput
  user?: UserCreateOneWithoutLocationInput
  place?: PlaceCreateOneWithoutLocationInput
  experience?: ExperienceCreateOneWithoutLocationInput
  restaurant?: RestaurantCreateOneWithoutLocationInput
}

export interface PaymentAccountUpsertWithoutPaypalInput {
  update: PaymentAccountUpdateWithoutPaypalDataInput
  create: PaymentAccountCreateWithoutPaypalInput
}

export interface NeighbourhoodCreateInput {
  name: String
  slug: String
  featured: Boolean
  popularity: Int
  locations?: LocationCreateManyWithoutNeighbourHoodInput
  homePreview?: PictureCreateOneInput
  city: CityCreateOneWithoutNeighbourhoodsInput
}

export interface PaymentAccountUpdateOneWithoutPaypalInput {
  create?: PaymentAccountCreateWithoutPaypalInput
  connect?: PaymentAccountWhereUniqueInput
  delete?: Boolean
  update?: PaymentAccountUpdateWithoutPaypalDataInput
  upsert?: PaymentAccountUpsertWithoutPaypalInput
}

export interface LocationCreateManyWithoutNeighbourHoodInput {
  create?: LocationCreateWithoutNeighbourHoodInput[] | LocationCreateWithoutNeighbourHoodInput
  connect?: LocationWhereUniqueInput[] | LocationWhereUniqueInput
}

export interface PaymentAccountUpdateInput {
  type?: PAYMENT_PROVIDER
  user?: UserUpdateOneWithoutPaymentAccountInput
  payments?: PaymentUpdateManyWithoutPaymentMethodInput
  paypal?: PaypalInformationUpdateOneWithoutPaymentAccountInput
  creditcard?: CreditCardInformationUpdateOneWithoutPaymentAccountInput
}

export interface LocationCreateWithoutNeighbourHoodInput {
  lat: Float
  lng: Float
  address?: String
  directions?: String
  user?: UserCreateOneWithoutLocationInput
  place?: PlaceCreateOneWithoutLocationInput
  experience?: ExperienceCreateOneWithoutLocationInput
  restaurant?: RestaurantCreateOneWithoutLocationInput
}

export interface BookingUpdateInput {
  startDate?: DateTime
  endDate?: DateTime
  bookee?: UserUpdateOneWithoutBookingsInput
  place?: PlaceUpdateOneWithoutBookingsInput
  payment?: PaymentUpdateOneWithoutBookingInput
}

export interface CityCreateInput {
  name: String
  neighbourhoods?: NeighbourhoodCreateManyWithoutCityInput
}

export interface PlaceUpsertWithoutAmenitiesInput {
  update: PlaceUpdateWithoutAmenitiesDataInput
  create: PlaceCreateWithoutAmenitiesInput
}

export interface NeighbourhoodCreateManyWithoutCityInput {
  create?: NeighbourhoodCreateWithoutCityInput[] | NeighbourhoodCreateWithoutCityInput
  connect?: NeighbourhoodWhereUniqueInput[] | NeighbourhoodWhereUniqueInput
}

export interface PlaceUpdateOneWithoutAmenitiesInput {
  create?: PlaceCreateWithoutAmenitiesInput
  connect?: PlaceWhereUniqueInput
  delete?: Boolean
  update?: PlaceUpdateWithoutAmenitiesDataInput
  upsert?: PlaceUpsertWithoutAmenitiesInput
}

export interface NeighbourhoodCreateWithoutCityInput {
  name: String
  slug: String
  featured: Boolean
  popularity: Int
  locations?: LocationCreateManyWithoutNeighbourHoodInput
  homePreview?: PictureCreateOneInput
}

export interface ExperienceUpsertWithoutCategoryInput {
  update: ExperienceUpdateWithoutCategoryDataInput
  create: ExperienceCreateWithoutCategoryInput
}

export interface ExperienceCreateInput {
  title: String
  pricePerPerson: Int
  popularity: Int
  category?: ExperienceCategoryCreateOneWithoutExperienceInput
  host: UserCreateOneWithoutHostingExperiencesInput
  location: LocationCreateOneWithoutExperienceInput
  reviews?: ReviewCreateManyWithoutExperienceInput
  preview: PictureCreateOneInput
}

export interface ExperienceUpdateOneWithoutCategoryInput {
  create?: ExperienceCreateWithoutCategoryInput
  connect?: ExperienceWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: ExperienceUpdateWithoutCategoryDataInput
  upsert?: ExperienceUpsertWithoutCategoryInput
}

export interface ExperienceCategoryCreateInput {
  mainColor?: String
  name: String
  experience?: ExperienceCreateOneWithoutCategoryInput
}

export interface ExperienceUpdateInput {
  title?: String
  pricePerPerson?: Int
  popularity?: Int
  category?: ExperienceCategoryUpdateOneWithoutExperienceInput
  host?: UserUpdateOneWithoutHostingExperiencesInput
  location?: LocationUpdateOneWithoutExperienceInput
  reviews?: ReviewUpdateManyWithoutExperienceInput
  preview?: PictureUpdateOneInput
}

export interface ExperienceCreateOneWithoutCategoryInput {
  create?: ExperienceCreateWithoutCategoryInput
  connect?: ExperienceWhereUniqueInput
}

export interface NeighbourhoodUpdateWithoutCityDataInput {
  name?: String
  slug?: String
  featured?: Boolean
  popularity?: Int
  locations?: LocationUpdateManyWithoutNeighbourHoodInput
  homePreview?: PictureUpdateOneInput
}

export interface ExperienceCreateWithoutCategoryInput {
  title: String
  pricePerPerson: Int
  popularity: Int
  host: UserCreateOneWithoutHostingExperiencesInput
  location: LocationCreateOneWithoutExperienceInput
  reviews?: ReviewCreateManyWithoutExperienceInput
  preview: PictureCreateOneInput
}

export interface NeighbourhoodUpdateManyWithoutCityInput {
  create?: NeighbourhoodCreateWithoutCityInput[] | NeighbourhoodCreateWithoutCityInput
  connect?: NeighbourhoodWhereUniqueInput[] | NeighbourhoodWhereUniqueInput
  disconnect?: NeighbourhoodWhereUniqueInput[] | NeighbourhoodWhereUniqueInput
  delete?: NeighbourhoodWhereUniqueInput[] | NeighbourhoodWhereUniqueInput
  update?: NeighbourhoodUpdateWithWhereUniqueWithoutCityInput[] | NeighbourhoodUpdateWithWhereUniqueWithoutCityInput
  upsert?: NeighbourhoodUpsertWithWhereUniqueWithoutCityInput[] | NeighbourhoodUpsertWithWhereUniqueWithoutCityInput
}

export interface AmenitiesCreateInput {
  elevator?: Boolean
  petsAllowed?: Boolean
  internet?: Boolean
  kitchen?: Boolean
  wirelessInternet?: Boolean
  familyKidFriendly?: Boolean
  freeParkingOnPremises?: Boolean
  hotTub?: Boolean
  pool?: Boolean
  smokingAllowed?: Boolean
  wheelchairAccessible?: Boolean
  breakfast?: Boolean
  cableTv?: Boolean
  suitableForEvents?: Boolean
  dryer?: Boolean
  washer?: Boolean
  indoorFireplace?: Boolean
  tv?: Boolean
  heating?: Boolean
  hangers?: Boolean
  iron?: Boolean
  hairDryer?: Boolean
  doorman?: Boolean
  paidParkingOffPremises?: Boolean
  freeParkingOnStreet?: Boolean
  gym?: Boolean
  airConditioning?: Boolean
  shampoo?: Boolean
  essentials?: Boolean
  laptopFriendlyWorkspace?: Boolean
  privateEntrance?: Boolean
  buzzerWirelessIntercom?: Boolean
  babyBath?: Boolean
  babyMonitor?: Boolean
  babysitterRecommendations?: Boolean
  bathtub?: Boolean
  changingTable?: Boolean
  childrensBooksAndToys?: Boolean
  childrensDinnerware?: Boolean
  crib?: Boolean
  place: PlaceCreateOneWithoutAmenitiesInput
}

export interface LocationUpsertWithWhereUniqueWithoutNeighbourHoodInput {
  where: LocationWhereUniqueInput
  update: LocationUpdateWithoutNeighbourHoodDataInput
  create: LocationCreateWithoutNeighbourHoodInput
}

export interface PlaceCreateOneWithoutAmenitiesInput {
  create?: PlaceCreateWithoutAmenitiesInput
  connect?: PlaceWhereUniqueInput
}

export interface LocationUpdateWithWhereUniqueWithoutNeighbourHoodInput {
  where: LocationWhereUniqueInput
  data: LocationUpdateWithoutNeighbourHoodDataInput
}

export interface PlaceCreateWithoutAmenitiesInput {
  name?: String
  size?: PLACE_SIZES
  shortDescription: String
  description: String
  slug: String
  maxGuests: Int
  numBedrooms: Int
  numBeds: Int
  numBaths: Int
  popularity: Int
  reviews?: ReviewCreateManyWithoutPlaceInput
  host: UserCreateOneWithoutOwnedPlacesInput
  pricing: PricingCreateOneWithoutPlaceInput
  location: LocationCreateOneWithoutPlaceInput
  views: ViewsCreateOneWithoutPlaceInput
  guestRequirements?: GuestRequirementsCreateOneWithoutPlaceInput
  policies?: PoliciesCreateOneWithoutPlaceInput
  houseRules?: HouseRulesCreateOneInput
  bookings?: BookingCreateManyWithoutPlaceInput
  pictures?: PictureCreateManyInput
}

export interface NeighbourhoodUpdateInput {
  name?: String
  slug?: String
  featured?: Boolean
  popularity?: Int
  locations?: LocationUpdateManyWithoutNeighbourHoodInput
  homePreview?: PictureUpdateOneInput
  city?: CityUpdateOneWithoutNeighbourhoodsInput
}

export interface ReviewCreateInput {
  text: String
  stars: Int
  accuracy: Int
  location: Int
  checkIn: Int
  value: Int
  cleanliness: Int
  communication: Int
  place: PlaceCreateOneWithoutReviewsInput
  experience?: ExperienceCreateOneWithoutReviewsInput
}

export interface PlaceUpsertWithoutViewsInput {
  update: PlaceUpdateWithoutViewsDataInput
  create: PlaceCreateWithoutViewsInput
}

export interface UserUpsertWithoutLocationInput {
  update: UserUpdateWithoutLocationDataInput
  create: UserCreateWithoutLocationInput
}

export interface PlaceUpdateOneWithoutViewsInput {
  create?: PlaceCreateWithoutViewsInput
  connect?: PlaceWhereUniqueInput
  delete?: Boolean
  update?: PlaceUpdateWithoutViewsDataInput
  upsert?: PlaceUpsertWithoutViewsInput
}

export interface PaymentCreateInput {
  serviceFee: Float
  placePrice: Float
  totalPrice: Float
  booking: BookingCreateOneWithoutPaymentInput
  paymentMethod: PaymentAccountCreateOneWithoutPaymentsInput
}

export interface HouseRulesUpdateInput {
  suitableForChildren?: Boolean
  suitableForInfants?: Boolean
  petsAllowed?: Boolean
  smokingAllowed?: Boolean
  partiesAndEventsAllowed?: Boolean
  additionalRules?: String
}

export interface PaymentAccountCreateInput {
  type?: PAYMENT_PROVIDER
  user: UserCreateOneWithoutPaymentAccountInput
  payments?: PaymentCreateManyWithoutPaymentMethodInput
  paypal?: PaypalInformationCreateOneWithoutPaymentAccountInput
  creditcard?: CreditCardInformationCreateOneWithoutPaymentAccountInput
}

export interface PlaceUpdateWithoutPoliciesDataInput {
  name?: String
  size?: PLACE_SIZES
  shortDescription?: String
  description?: String
  slug?: String
  maxGuests?: Int
  numBedrooms?: Int
  numBeds?: Int
  numBaths?: Int
  popularity?: Int
  reviews?: ReviewUpdateManyWithoutPlaceInput
  amenities?: AmenitiesUpdateOneWithoutPlaceInput
  host?: UserUpdateOneWithoutOwnedPlacesInput
  pricing?: PricingUpdateOneWithoutPlaceInput
  location?: LocationUpdateOneWithoutPlaceInput
  views?: ViewsUpdateOneWithoutPlaceInput
  guestRequirements?: GuestRequirementsUpdateOneWithoutPlaceInput
  houseRules?: HouseRulesUpdateOneInput
  bookings?: BookingUpdateManyWithoutPlaceInput
  pictures?: PictureUpdateManyInput
}

export interface PaypalInformationCreateInput {
  email: String
  paymentAccount: PaymentAccountCreateOneWithoutPaypalInput
}

export interface PoliciesUpdateInput {
  checkInStartTime?: Float
  checkInEndTime?: Float
  checkoutTime?: Float
  place?: PlaceUpdateOneWithoutPoliciesInput
}

export interface PaymentAccountCreateOneWithoutPaypalInput {
  create?: PaymentAccountCreateWithoutPaypalInput
  connect?: PaymentAccountWhereUniqueInput
}

export interface PlaceUpdateWithoutGuestRequirementsDataInput {
  name?: String
  size?: PLACE_SIZES
  shortDescription?: String
  description?: String
  slug?: String
  maxGuests?: Int
  numBedrooms?: Int
  numBeds?: Int
  numBaths?: Int
  popularity?: Int
  reviews?: ReviewUpdateManyWithoutPlaceInput
  amenities?: AmenitiesUpdateOneWithoutPlaceInput
  host?: UserUpdateOneWithoutOwnedPlacesInput
  pricing?: PricingUpdateOneWithoutPlaceInput
  location?: LocationUpdateOneWithoutPlaceInput
  views?: ViewsUpdateOneWithoutPlaceInput
  policies?: PoliciesUpdateOneWithoutPlaceInput
  houseRules?: HouseRulesUpdateOneInput
  bookings?: BookingUpdateManyWithoutPlaceInput
  pictures?: PictureUpdateManyInput
}

export interface PaymentAccountCreateWithoutPaypalInput {
  type?: PAYMENT_PROVIDER
  user: UserCreateOneWithoutPaymentAccountInput
  payments?: PaymentCreateManyWithoutPaymentMethodInput
  creditcard?: CreditCardInformationCreateOneWithoutPaymentAccountInput
}

export interface GuestRequirementsUpdateInput {
  govIssuedId?: Boolean
  recommendationsFromOtherHosts?: Boolean
  guestTripInformation?: Boolean
  place?: PlaceUpdateOneWithoutGuestRequirementsInput
}

export interface CreditCardInformationCreateInput {
  cardNumber: String
  expiresOnMonth: Int
  expiresOnYear: Int
  securityCode: String
  firstName: String
  lastName: String
  postalCode: String
  country: String
  paymentAccount?: PaymentAccountCreateOneWithoutCreditcardInput
}

export interface PlaceUpdateWithoutPricingDataInput {
  name?: String
  size?: PLACE_SIZES
  shortDescription?: String
  description?: String
  slug?: String
  maxGuests?: Int
  numBedrooms?: Int
  numBeds?: Int
  numBaths?: Int
  popularity?: Int
  reviews?: ReviewUpdateManyWithoutPlaceInput
  amenities?: AmenitiesUpdateOneWithoutPlaceInput
  host?: UserUpdateOneWithoutOwnedPlacesInput
  location?: LocationUpdateOneWithoutPlaceInput
  views?: ViewsUpdateOneWithoutPlaceInput
  guestRequirements?: GuestRequirementsUpdateOneWithoutPlaceInput
  policies?: PoliciesUpdateOneWithoutPlaceInput
  houseRules?: HouseRulesUpdateOneInput
  bookings?: BookingUpdateManyWithoutPlaceInput
  pictures?: PictureUpdateManyInput
}

export interface PaymentAccountCreateOneWithoutCreditcardInput {
  create?: PaymentAccountCreateWithoutCreditcardInput
  connect?: PaymentAccountWhereUniqueInput
}

export interface PricingUpdateInput {
  monthlyDiscount?: Int
  weeklyDiscount?: Int
  perNight?: Int
  smartPricing?: Boolean
  basePrice?: Int
  averageWeekly?: Int
  averageMonthly?: Int
  cleaningFee?: Int
  securityDeposit?: Int
  extraGuests?: Int
  weekendPricing?: Int
  currency?: CURRENCY
  place?: PlaceUpdateOneWithoutPricingInput
}

export interface PaymentAccountCreateWithoutCreditcardInput {
  type?: PAYMENT_PROVIDER
  user: UserCreateOneWithoutPaymentAccountInput
  payments?: PaymentCreateManyWithoutPaymentMethodInput
  paypal?: PaypalInformationCreateOneWithoutPaymentAccountInput
}

export interface PlaceUpsertWithWhereUniqueWithoutHostInput {
  where: PlaceWhereUniqueInput
  update: PlaceUpdateWithoutHostDataInput
  create: PlaceCreateWithoutHostInput
}

export interface MessageCreateInput {
  deliveredAt: DateTime
  readAt: DateTime
  from: UserCreateOneWithoutSentMessagesInput
  to: UserCreateOneWithoutReceivedMessagesInput
}

export interface ExperienceUpsertWithoutReviewsInput {
  update: ExperienceUpdateWithoutReviewsDataInput
  create: ExperienceCreateWithoutReviewsInput
}

export interface NotificationCreateInput {
  type?: NOTIFICATION_TYPE
  link: String
  readDate: DateTime
  user: UserCreateOneWithoutNotificationsInput
}

export interface LocationUpsertWithoutUserInput {
  update: LocationUpdateWithoutUserDataInput
  create: LocationCreateWithoutUserInput
}

export interface UserCreateOneWithoutNotificationsInput {
  create?: UserCreateWithoutNotificationsInput
  connect?: UserWhereUniqueInput
}

export interface UserUpsertWithoutOwnedPlacesInput {
  update: UserUpdateWithoutOwnedPlacesDataInput
  create: UserCreateWithoutOwnedPlacesInput
}

export interface UserCreateWithoutNotificationsInput {
  firstName: String
  lastName: String
  email: String
  password: String
  phone: String
  responseRate?: Float
  responseTime?: Int
  isSuperHost?: Boolean
  ownedPlaces?: PlaceCreateManyWithoutHostInput
  location?: LocationCreateOneWithoutUserInput
  bookings?: BookingCreateManyWithoutBookeeInput
  paymentAccount?: PaymentAccountCreateManyWithoutUserInput
  sentMessages?: MessageCreateManyWithoutFromInput
  receivedMessages?: MessageCreateManyWithoutToInput
  profilePicture?: PictureCreateOneInput
  hostingExperiences?: ExperienceCreateManyWithoutHostInput
}

export interface PlaceUpsertWithoutBookingsInput {
  update: PlaceUpdateWithoutBookingsDataInput
  create: PlaceCreateWithoutBookingsInput
}

export interface RestaurantCreateInput {
  title: String
  avgPricePerPerson: Int
  isCurated?: Boolean
  slug: String
  popularity: Int
  pictures?: PictureCreateManyInput
  location: LocationCreateOneWithoutRestaurantInput
}

export interface ExperienceUpsertWithoutLocationInput {
  update: ExperienceUpdateWithoutLocationDataInput
  create: ExperienceCreateWithoutLocationInput
}

export interface LocationCreateOneWithoutRestaurantInput {
  create?: LocationCreateWithoutRestaurantInput
  connect?: LocationWhereUniqueInput
}

export interface ExperienceUpdateOneWithoutLocationInput {
  create?: ExperienceCreateWithoutLocationInput
  connect?: ExperienceWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: ExperienceUpdateWithoutLocationDataInput
  upsert?: ExperienceUpsertWithoutLocationInput
}

export interface NotificationWhereInput {
  AND?: NotificationWhereInput[] | NotificationWhereInput
  OR?: NotificationWhereInput[] | NotificationWhereInput
  NOT?: NotificationWhereInput[] | NotificationWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  type?: NOTIFICATION_TYPE
  type_not?: NOTIFICATION_TYPE
  type_in?: NOTIFICATION_TYPE[] | NOTIFICATION_TYPE
  type_not_in?: NOTIFICATION_TYPE[] | NOTIFICATION_TYPE
  link?: String
  link_not?: String
  link_in?: String[] | String
  link_not_in?: String[] | String
  link_lt?: String
  link_lte?: String
  link_gt?: String
  link_gte?: String
  link_contains?: String
  link_not_contains?: String
  link_starts_with?: String
  link_not_starts_with?: String
  link_ends_with?: String
  link_not_ends_with?: String
  readDate?: DateTime
  readDate_not?: DateTime
  readDate_in?: DateTime[] | DateTime
  readDate_not_in?: DateTime[] | DateTime
  readDate_lt?: DateTime
  readDate_lte?: DateTime
  readDate_gt?: DateTime
  readDate_gte?: DateTime
  user?: UserWhereInput
}

export interface PlaceCreateManyWithoutHostInput {
  create?: PlaceCreateWithoutHostInput[] | PlaceCreateWithoutHostInput
  connect?: PlaceWhereUniqueInput[] | PlaceWhereUniqueInput
}

export interface PaypalInformationWhereInput {
  AND?: PaypalInformationWhereInput[] | PaypalInformationWhereInput
  OR?: PaypalInformationWhereInput[] | PaypalInformationWhereInput
  NOT?: PaypalInformationWhereInput[] | PaypalInformationWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  paymentAccount?: PaymentAccountWhereInput
}

export interface ReviewCreateManyWithoutPlaceInput {
  create?: ReviewCreateWithoutPlaceInput[] | ReviewCreateWithoutPlaceInput
  connect?: ReviewWhereUniqueInput[] | ReviewWhereUniqueInput
}

export interface ExperienceCreateOneWithoutReviewsInput {
  create?: ExperienceCreateWithoutReviewsInput
  connect?: ExperienceWhereUniqueInput
}

export interface ExperienceCategoryCreateOneWithoutExperienceInput {
  create?: ExperienceCategoryCreateWithoutExperienceInput
  connect?: ExperienceCategoryWhereUniqueInput
}

export interface PlaceUpdateWithWhereUniqueWithoutHostInput {
  where: PlaceWhereUniqueInput
  data: PlaceUpdateWithoutHostDataInput
}

export interface UserCreateOneWithoutHostingExperiencesInput {
  create?: UserCreateWithoutHostingExperiencesInput
  connect?: UserWhereUniqueInput
}

export interface PlaceUpdateWithoutHostDataInput {
  name?: String
  size?: PLACE_SIZES
  shortDescription?: String
  description?: String
  slug?: String
  maxGuests?: Int
  numBedrooms?: Int
  numBeds?: Int
  numBaths?: Int
  popularity?: Int
  reviews?: ReviewUpdateManyWithoutPlaceInput
  amenities?: AmenitiesUpdateOneWithoutPlaceInput
  pricing?: PricingUpdateOneWithoutPlaceInput
  location?: LocationUpdateOneWithoutPlaceInput
  views?: ViewsUpdateOneWithoutPlaceInput
  guestRequirements?: GuestRequirementsUpdateOneWithoutPlaceInput
  policies?: PoliciesUpdateOneWithoutPlaceInput
  houseRules?: HouseRulesUpdateOneInput
  bookings?: BookingUpdateManyWithoutPlaceInput
  pictures?: PictureUpdateManyInput
}

export interface LocationCreateOneWithoutUserInput {
  create?: LocationCreateWithoutUserInput
  connect?: LocationWhereUniqueInput
}

export interface ReviewUpdateManyWithoutPlaceInput {
  create?: ReviewCreateWithoutPlaceInput[] | ReviewCreateWithoutPlaceInput
  connect?: ReviewWhereUniqueInput[] | ReviewWhereUniqueInput
  disconnect?: ReviewWhereUniqueInput[] | ReviewWhereUniqueInput
  delete?: ReviewWhereUniqueInput[] | ReviewWhereUniqueInput
  update?: ReviewUpdateWithWhereUniqueWithoutPlaceInput[] | ReviewUpdateWithWhereUniqueWithoutPlaceInput
  upsert?: ReviewUpsertWithWhereUniqueWithoutPlaceInput[] | ReviewUpsertWithWhereUniqueWithoutPlaceInput
}

export interface NeighbourhoodCreateOneWithoutLocationsInput {
  create?: NeighbourhoodCreateWithoutLocationsInput
  connect?: NeighbourhoodWhereUniqueInput
}

export interface ReviewUpdateWithWhereUniqueWithoutPlaceInput {
  where: ReviewWhereUniqueInput
  data: ReviewUpdateWithoutPlaceDataInput
}

export interface PictureCreateOneInput {
  create?: PictureCreateInput
}

export interface ReviewUpdateWithoutPlaceDataInput {
  text?: String
  stars?: Int
  accuracy?: Int
  location?: Int
  checkIn?: Int
  value?: Int
  cleanliness?: Int
  communication?: Int
  experience?: ExperienceUpdateOneWithoutReviewsInput
}

export interface CityCreateOneWithoutNeighbourhoodsInput {
  create?: CityCreateWithoutNeighbourhoodsInput
  connect?: CityWhereUniqueInput
}

export interface ExperienceUpdateOneWithoutReviewsInput {
  create?: ExperienceCreateWithoutReviewsInput
  connect?: ExperienceWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: ExperienceUpdateWithoutReviewsDataInput
  upsert?: ExperienceUpsertWithoutReviewsInput
}

export interface PlaceCreateOneWithoutLocationInput {
  create?: PlaceCreateWithoutLocationInput
  connect?: PlaceWhereUniqueInput
}

export interface ExperienceUpdateWithoutReviewsDataInput {
  title?: String
  pricePerPerson?: Int
  popularity?: Int
  category?: ExperienceCategoryUpdateOneWithoutExperienceInput
  host?: UserUpdateOneWithoutHostingExperiencesInput
  location?: LocationUpdateOneWithoutExperienceInput
  preview?: PictureUpdateOneInput
}

export interface AmenitiesCreateOneWithoutPlaceInput {
  create?: AmenitiesCreateWithoutPlaceInput
  connect?: AmenitiesWhereUniqueInput
}

export interface ExperienceCategoryUpdateOneWithoutExperienceInput {
  create?: ExperienceCategoryCreateWithoutExperienceInput
  connect?: ExperienceCategoryWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: ExperienceCategoryUpdateWithoutExperienceDataInput
  upsert?: ExperienceCategoryUpsertWithoutExperienceInput
}

export interface UserCreateOneWithoutOwnedPlacesInput {
  create?: UserCreateWithoutOwnedPlacesInput
  connect?: UserWhereUniqueInput
}

export interface ExperienceCategoryUpdateWithoutExperienceDataInput {
  mainColor?: String
  name?: String
}

export interface BookingCreateManyWithoutBookeeInput {
  create?: BookingCreateWithoutBookeeInput[] | BookingCreateWithoutBookeeInput
  connect?: BookingWhereUniqueInput[] | BookingWhereUniqueInput
}

export interface ExperienceCategoryUpsertWithoutExperienceInput {
  update: ExperienceCategoryUpdateWithoutExperienceDataInput
  create: ExperienceCategoryCreateWithoutExperienceInput
}

export interface PlaceCreateOneWithoutBookingsInput {
  create?: PlaceCreateWithoutBookingsInput
  connect?: PlaceWhereUniqueInput
}

export interface UserUpdateOneWithoutHostingExperiencesInput {
  create?: UserCreateWithoutHostingExperiencesInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutHostingExperiencesDataInput
  upsert?: UserUpsertWithoutHostingExperiencesInput
}

export interface PricingCreateOneWithoutPlaceInput {
  create?: PricingCreateWithoutPlaceInput
  connect?: PricingWhereUniqueInput
}

export interface UserUpdateWithoutHostingExperiencesDataInput {
  firstName?: String
  lastName?: String
  email?: String
  password?: String
  phone?: String
  responseRate?: Float
  responseTime?: Int
  isSuperHost?: Boolean
  ownedPlaces?: PlaceUpdateManyWithoutHostInput
  location?: LocationUpdateOneWithoutUserInput
  bookings?: BookingUpdateManyWithoutBookeeInput
  paymentAccount?: PaymentAccountUpdateManyWithoutUserInput
  sentMessages?: MessageUpdateManyWithoutFromInput
  receivedMessages?: MessageUpdateManyWithoutToInput
  notifications?: NotificationUpdateManyWithoutUserInput
  profilePicture?: PictureUpdateOneInput
}

export interface LocationCreateOneWithoutPlaceInput {
  create?: LocationCreateWithoutPlaceInput
  connect?: LocationWhereUniqueInput
}

export interface LocationUpdateOneWithoutUserInput {
  create?: LocationCreateWithoutUserInput
  connect?: LocationWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: LocationUpdateWithoutUserDataInput
  upsert?: LocationUpsertWithoutUserInput
}

export interface UserCreateOneWithoutLocationInput {
  create?: UserCreateWithoutLocationInput
  connect?: UserWhereUniqueInput
}

export interface LocationUpdateWithoutUserDataInput {
  lat?: Float
  lng?: Float
  address?: String
  directions?: String
  neighbourHood?: NeighbourhoodUpdateOneWithoutLocationsInput
  place?: PlaceUpdateOneWithoutLocationInput
  experience?: ExperienceUpdateOneWithoutLocationInput
  restaurant?: RestaurantUpdateOneWithoutLocationInput
}

export interface PaymentAccountCreateManyWithoutUserInput {
  create?: PaymentAccountCreateWithoutUserInput[] | PaymentAccountCreateWithoutUserInput
  connect?: PaymentAccountWhereUniqueInput[] | PaymentAccountWhereUniqueInput
}

export interface NeighbourhoodUpdateOneWithoutLocationsInput {
  create?: NeighbourhoodCreateWithoutLocationsInput
  connect?: NeighbourhoodWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: NeighbourhoodUpdateWithoutLocationsDataInput
  upsert?: NeighbourhoodUpsertWithoutLocationsInput
}

export interface PaymentCreateManyWithoutPaymentMethodInput {
  create?: PaymentCreateWithoutPaymentMethodInput[] | PaymentCreateWithoutPaymentMethodInput
  connect?: PaymentWhereUniqueInput[] | PaymentWhereUniqueInput
}

export interface NeighbourhoodUpdateWithoutLocationsDataInput {
  name?: String
  slug?: String
  featured?: Boolean
  popularity?: Int
  homePreview?: PictureUpdateOneInput
  city?: CityUpdateOneWithoutNeighbourhoodsInput
}

export interface BookingCreateOneWithoutPaymentInput {
  create?: BookingCreateWithoutPaymentInput
  connect?: BookingWhereUniqueInput
}

export interface PictureUpdateOneInput {
  create?: PictureCreateInput
  disconnect?: Boolean
  delete?: Boolean
  update?: PictureUpdateDataInput
  upsert?: PictureUpsertNestedInput
}

export interface UserCreateOneWithoutBookingsInput {
  create?: UserCreateWithoutBookingsInput
  connect?: UserWhereUniqueInput
}

export interface PictureUpdateDataInput {
  url?: String
}

export interface MessageCreateManyWithoutFromInput {
  create?: MessageCreateWithoutFromInput[] | MessageCreateWithoutFromInput
  connect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput
}

export interface PictureUpsertNestedInput {
  update: PictureUpdateDataInput
  create: PictureCreateInput
}

export interface UserCreateOneWithoutReceivedMessagesInput {
  create?: UserCreateWithoutReceivedMessagesInput
  connect?: UserWhereUniqueInput
}

export interface CityUpdateOneWithoutNeighbourhoodsInput {
  create?: CityCreateWithoutNeighbourhoodsInput
  connect?: CityWhereUniqueInput
  delete?: Boolean
  update?: CityUpdateWithoutNeighbourhoodsDataInput
  upsert?: CityUpsertWithoutNeighbourhoodsInput
}

export interface NotificationCreateManyWithoutUserInput {
  create?: NotificationCreateWithoutUserInput[] | NotificationCreateWithoutUserInput
  connect?: NotificationWhereUniqueInput[] | NotificationWhereUniqueInput
}

export interface CityUpdateWithoutNeighbourhoodsDataInput {
  name?: String
}

export interface ExperienceCreateManyWithoutHostInput {
  create?: ExperienceCreateWithoutHostInput[] | ExperienceCreateWithoutHostInput
  connect?: ExperienceWhereUniqueInput[] | ExperienceWhereUniqueInput
}

export interface CityUpsertWithoutNeighbourhoodsInput {
  update: CityUpdateWithoutNeighbourhoodsDataInput
  create: CityCreateWithoutNeighbourhoodsInput
}

export interface LocationCreateOneWithoutExperienceInput {
  create?: LocationCreateWithoutExperienceInput
  connect?: LocationWhereUniqueInput
}

export interface NeighbourhoodUpsertWithoutLocationsInput {
  update: NeighbourhoodUpdateWithoutLocationsDataInput
  create: NeighbourhoodCreateWithoutLocationsInput
}

export interface RestaurantCreateOneWithoutLocationInput {
  create?: RestaurantCreateWithoutLocationInput
  connect?: RestaurantWhereUniqueInput
}

export interface PlaceUpdateOneWithoutLocationInput {
  create?: PlaceCreateWithoutLocationInput
  connect?: PlaceWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: PlaceUpdateWithoutLocationDataInput
  upsert?: PlaceUpsertWithoutLocationInput
}

export interface PictureCreateManyInput {
  create?: PictureCreateInput[] | PictureCreateInput
}

export interface PlaceUpdateWithoutLocationDataInput {
  name?: String
  size?: PLACE_SIZES
  shortDescription?: String
  description?: String
  slug?: String
  maxGuests?: Int
  numBedrooms?: Int
  numBeds?: Int
  numBaths?: Int
  popularity?: Int
  reviews?: ReviewUpdateManyWithoutPlaceInput
  amenities?: AmenitiesUpdateOneWithoutPlaceInput
  host?: UserUpdateOneWithoutOwnedPlacesInput
  pricing?: PricingUpdateOneWithoutPlaceInput
  views?: ViewsUpdateOneWithoutPlaceInput
  guestRequirements?: GuestRequirementsUpdateOneWithoutPlaceInput
  policies?: PoliciesUpdateOneWithoutPlaceInput
  houseRules?: HouseRulesUpdateOneInput
  bookings?: BookingUpdateManyWithoutPlaceInput
  pictures?: PictureUpdateManyInput
}

export interface ReviewCreateWithoutExperienceInput {
  text: String
  stars: Int
  accuracy: Int
  location: Int
  checkIn: Int
  value: Int
  cleanliness: Int
  communication: Int
  place: PlaceCreateOneWithoutReviewsInput
}

export interface AmenitiesUpdateOneWithoutPlaceInput {
  create?: AmenitiesCreateWithoutPlaceInput
  connect?: AmenitiesWhereUniqueInput
  delete?: Boolean
  update?: AmenitiesUpdateWithoutPlaceDataInput
  upsert?: AmenitiesUpsertWithoutPlaceInput
}

export interface PaymentAccountWhereInput {
  AND?: PaymentAccountWhereInput[] | PaymentAccountWhereInput
  OR?: PaymentAccountWhereInput[] | PaymentAccountWhereInput
  NOT?: PaymentAccountWhereInput[] | PaymentAccountWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  type?: PAYMENT_PROVIDER
  type_not?: PAYMENT_PROVIDER
  type_in?: PAYMENT_PROVIDER[] | PAYMENT_PROVIDER
  type_not_in?: PAYMENT_PROVIDER[] | PAYMENT_PROVIDER
  user?: UserWhereInput
  payments_every?: PaymentWhereInput
  payments_some?: PaymentWhereInput
  payments_none?: PaymentWhereInput
  paypal?: PaypalInformationWhereInput
  creditcard?: CreditCardInformationWhereInput
}

export interface AmenitiesUpdateWithoutPlaceDataInput {
  elevator?: Boolean
  petsAllowed?: Boolean
  internet?: Boolean
  kitchen?: Boolean
  wirelessInternet?: Boolean
  familyKidFriendly?: Boolean
  freeParkingOnPremises?: Boolean
  hotTub?: Boolean
  pool?: Boolean
  smokingAllowed?: Boolean
  wheelchairAccessible?: Boolean
  breakfast?: Boolean
  cableTv?: Boolean
  suitableForEvents?: Boolean
  dryer?: Boolean
  washer?: Boolean
  indoorFireplace?: Boolean
  tv?: Boolean
  heating?: Boolean
  hangers?: Boolean
  iron?: Boolean
  hairDryer?: Boolean
  doorman?: Boolean
  paidParkingOffPremises?: Boolean
  freeParkingOnStreet?: Boolean
  gym?: Boolean
  airConditioning?: Boolean
  shampoo?: Boolean
  essentials?: Boolean
  laptopFriendlyWorkspace?: Boolean
  privateEntrance?: Boolean
  buzzerWirelessIntercom?: Boolean
  babyBath?: Boolean
  babyMonitor?: Boolean
  babysitterRecommendations?: Boolean
  bathtub?: Boolean
  changingTable?: Boolean
  childrensBooksAndToys?: Boolean
  childrensDinnerware?: Boolean
  crib?: Boolean
}

export interface MessageSubscriptionWhereInput {
  AND?: MessageSubscriptionWhereInput[] | MessageSubscriptionWhereInput
  OR?: MessageSubscriptionWhereInput[] | MessageSubscriptionWhereInput
  NOT?: MessageSubscriptionWhereInput[] | MessageSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: MessageWhereInput
}

export interface AmenitiesUpsertWithoutPlaceInput {
  update: AmenitiesUpdateWithoutPlaceDataInput
  create: AmenitiesCreateWithoutPlaceInput
}

export interface BookingWhereInput {
  AND?: BookingWhereInput[] | BookingWhereInput
  OR?: BookingWhereInput[] | BookingWhereInput
  NOT?: BookingWhereInput[] | BookingWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  startDate?: DateTime
  startDate_not?: DateTime
  startDate_in?: DateTime[] | DateTime
  startDate_not_in?: DateTime[] | DateTime
  startDate_lt?: DateTime
  startDate_lte?: DateTime
  startDate_gt?: DateTime
  startDate_gte?: DateTime
  endDate?: DateTime
  endDate_not?: DateTime
  endDate_in?: DateTime[] | DateTime
  endDate_not_in?: DateTime[] | DateTime
  endDate_lt?: DateTime
  endDate_lte?: DateTime
  endDate_gt?: DateTime
  endDate_gte?: DateTime
  bookee?: UserWhereInput
  place?: PlaceWhereInput
  payment?: PaymentWhereInput
}

export interface UserUpdateOneWithoutOwnedPlacesInput {
  create?: UserCreateWithoutOwnedPlacesInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutOwnedPlacesDataInput
  upsert?: UserUpsertWithoutOwnedPlacesInput
}

export interface ReviewSubscriptionWhereInput {
  AND?: ReviewSubscriptionWhereInput[] | ReviewSubscriptionWhereInput
  OR?: ReviewSubscriptionWhereInput[] | ReviewSubscriptionWhereInput
  NOT?: ReviewSubscriptionWhereInput[] | ReviewSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ReviewWhereInput
}

export interface UserUpdateWithoutOwnedPlacesDataInput {
  firstName?: String
  lastName?: String
  email?: String
  password?: String
  phone?: String
  responseRate?: Float
  responseTime?: Int
  isSuperHost?: Boolean
  location?: LocationUpdateOneWithoutUserInput
  bookings?: BookingUpdateManyWithoutBookeeInput
  paymentAccount?: PaymentAccountUpdateManyWithoutUserInput
  sentMessages?: MessageUpdateManyWithoutFromInput
  receivedMessages?: MessageUpdateManyWithoutToInput
  notifications?: NotificationUpdateManyWithoutUserInput
  profilePicture?: PictureUpdateOneInput
  hostingExperiences?: ExperienceUpdateManyWithoutHostInput
}

export interface ExperienceSubscriptionWhereInput {
  AND?: ExperienceSubscriptionWhereInput[] | ExperienceSubscriptionWhereInput
  OR?: ExperienceSubscriptionWhereInput[] | ExperienceSubscriptionWhereInput
  NOT?: ExperienceSubscriptionWhereInput[] | ExperienceSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ExperienceWhereInput
}

export interface BookingUpdateManyWithoutBookeeInput {
  create?: BookingCreateWithoutBookeeInput[] | BookingCreateWithoutBookeeInput
  connect?: BookingWhereUniqueInput[] | BookingWhereUniqueInput
  disconnect?: BookingWhereUniqueInput[] | BookingWhereUniqueInput
  delete?: BookingWhereUniqueInput[] | BookingWhereUniqueInput
  update?: BookingUpdateWithWhereUniqueWithoutBookeeInput[] | BookingUpdateWithWhereUniqueWithoutBookeeInput
  upsert?: BookingUpsertWithWhereUniqueWithoutBookeeInput[] | BookingUpsertWithWhereUniqueWithoutBookeeInput
}

export interface GuestRequirementsWhereInput {
  AND?: GuestRequirementsWhereInput[] | GuestRequirementsWhereInput
  OR?: GuestRequirementsWhereInput[] | GuestRequirementsWhereInput
  NOT?: GuestRequirementsWhereInput[] | GuestRequirementsWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  govIssuedId?: Boolean
  govIssuedId_not?: Boolean
  recommendationsFromOtherHosts?: Boolean
  recommendationsFromOtherHosts_not?: Boolean
  guestTripInformation?: Boolean
  guestTripInformation_not?: Boolean
  place?: PlaceWhereInput
}

export interface BookingUpdateWithWhereUniqueWithoutBookeeInput {
  where: BookingWhereUniqueInput
  data: BookingUpdateWithoutBookeeDataInput
}

export interface ViewsWhereInput {
  AND?: ViewsWhereInput[] | ViewsWhereInput
  OR?: ViewsWhereInput[] | ViewsWhereInput
  NOT?: ViewsWhereInput[] | ViewsWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  lastWeek?: Int
  lastWeek_not?: Int
  lastWeek_in?: Int[] | Int
  lastWeek_not_in?: Int[] | Int
  lastWeek_lt?: Int
  lastWeek_lte?: Int
  lastWeek_gt?: Int
  lastWeek_gte?: Int
  place?: PlaceWhereInput
}

export interface BookingUpdateWithoutBookeeDataInput {
  startDate?: DateTime
  endDate?: DateTime
  place?: PlaceUpdateOneWithoutBookingsInput
  payment?: PaymentUpdateOneWithoutBookingInput
}

export interface AmenitiesWhereInput {
  AND?: AmenitiesWhereInput[] | AmenitiesWhereInput
  OR?: AmenitiesWhereInput[] | AmenitiesWhereInput
  NOT?: AmenitiesWhereInput[] | AmenitiesWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  elevator?: Boolean
  elevator_not?: Boolean
  petsAllowed?: Boolean
  petsAllowed_not?: Boolean
  internet?: Boolean
  internet_not?: Boolean
  kitchen?: Boolean
  kitchen_not?: Boolean
  wirelessInternet?: Boolean
  wirelessInternet_not?: Boolean
  familyKidFriendly?: Boolean
  familyKidFriendly_not?: Boolean
  freeParkingOnPremises?: Boolean
  freeParkingOnPremises_not?: Boolean
  hotTub?: Boolean
  hotTub_not?: Boolean
  pool?: Boolean
  pool_not?: Boolean
  smokingAllowed?: Boolean
  smokingAllowed_not?: Boolean
  wheelchairAccessible?: Boolean
  wheelchairAccessible_not?: Boolean
  breakfast?: Boolean
  breakfast_not?: Boolean
  cableTv?: Boolean
  cableTv_not?: Boolean
  suitableForEvents?: Boolean
  suitableForEvents_not?: Boolean
  dryer?: Boolean
  dryer_not?: Boolean
  washer?: Boolean
  washer_not?: Boolean
  indoorFireplace?: Boolean
  indoorFireplace_not?: Boolean
  tv?: Boolean
  tv_not?: Boolean
  heating?: Boolean
  heating_not?: Boolean
  hangers?: Boolean
  hangers_not?: Boolean
  iron?: Boolean
  iron_not?: Boolean
  hairDryer?: Boolean
  hairDryer_not?: Boolean
  doorman?: Boolean
  doorman_not?: Boolean
  paidParkingOffPremises?: Boolean
  paidParkingOffPremises_not?: Boolean
  freeParkingOnStreet?: Boolean
  freeParkingOnStreet_not?: Boolean
  gym?: Boolean
  gym_not?: Boolean
  airConditioning?: Boolean
  airConditioning_not?: Boolean
  shampoo?: Boolean
  shampoo_not?: Boolean
  essentials?: Boolean
  essentials_not?: Boolean
  laptopFriendlyWorkspace?: Boolean
  laptopFriendlyWorkspace_not?: Boolean
  privateEntrance?: Boolean
  privateEntrance_not?: Boolean
  buzzerWirelessIntercom?: Boolean
  buzzerWirelessIntercom_not?: Boolean
  babyBath?: Boolean
  babyBath_not?: Boolean
  babyMonitor?: Boolean
  babyMonitor_not?: Boolean
  babysitterRecommendations?: Boolean
  babysitterRecommendations_not?: Boolean
  bathtub?: Boolean
  bathtub_not?: Boolean
  changingTable?: Boolean
  changingTable_not?: Boolean
  childrensBooksAndToys?: Boolean
  childrensBooksAndToys_not?: Boolean
  childrensDinnerware?: Boolean
  childrensDinnerware_not?: Boolean
  crib?: Boolean
  crib_not?: Boolean
  place?: PlaceWhereInput
}

export interface PlaceUpdateOneWithoutBookingsInput {
  create?: PlaceCreateWithoutBookingsInput
  connect?: PlaceWhereUniqueInput
  delete?: Boolean
  update?: PlaceUpdateWithoutBookingsDataInput
  upsert?: PlaceUpsertWithoutBookingsInput
}

export interface CityWhereInput {
  AND?: CityWhereInput[] | CityWhereInput
  OR?: CityWhereInput[] | CityWhereInput
  NOT?: CityWhereInput[] | CityWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  neighbourhoods_every?: NeighbourhoodWhereInput
  neighbourhoods_some?: NeighbourhoodWhereInput
  neighbourhoods_none?: NeighbourhoodWhereInput
}

export interface PlaceUpdateWithoutBookingsDataInput {
  name?: String
  size?: PLACE_SIZES
  shortDescription?: String
  description?: String
  slug?: String
  maxGuests?: Int
  numBedrooms?: Int
  numBeds?: Int
  numBaths?: Int
  popularity?: Int
  reviews?: ReviewUpdateManyWithoutPlaceInput
  amenities?: AmenitiesUpdateOneWithoutPlaceInput
  host?: UserUpdateOneWithoutOwnedPlacesInput
  pricing?: PricingUpdateOneWithoutPlaceInput
  location?: LocationUpdateOneWithoutPlaceInput
  views?: ViewsUpdateOneWithoutPlaceInput
  guestRequirements?: GuestRequirementsUpdateOneWithoutPlaceInput
  policies?: PoliciesUpdateOneWithoutPlaceInput
  houseRules?: HouseRulesUpdateOneInput
  pictures?: PictureUpdateManyInput
}

export interface ExperienceCategoryWhereInput {
  AND?: ExperienceCategoryWhereInput[] | ExperienceCategoryWhereInput
  OR?: ExperienceCategoryWhereInput[] | ExperienceCategoryWhereInput
  NOT?: ExperienceCategoryWhereInput[] | ExperienceCategoryWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  mainColor?: String
  mainColor_not?: String
  mainColor_in?: String[] | String
  mainColor_not_in?: String[] | String
  mainColor_lt?: String
  mainColor_lte?: String
  mainColor_gt?: String
  mainColor_gte?: String
  mainColor_contains?: String
  mainColor_not_contains?: String
  mainColor_starts_with?: String
  mainColor_not_starts_with?: String
  mainColor_ends_with?: String
  mainColor_not_ends_with?: String
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  experience?: ExperienceWhereInput
}

export interface PricingUpdateOneWithoutPlaceInput {
  create?: PricingCreateWithoutPlaceInput
  connect?: PricingWhereUniqueInput
  delete?: Boolean
  update?: PricingUpdateWithoutPlaceDataInput
  upsert?: PricingUpsertWithoutPlaceInput
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
}

export interface PricingUpdateWithoutPlaceDataInput {
  monthlyDiscount?: Int
  weeklyDiscount?: Int
  perNight?: Int
  smartPricing?: Boolean
  basePrice?: Int
  averageWeekly?: Int
  averageMonthly?: Int
  cleaningFee?: Int
  securityDeposit?: Int
  extraGuests?: Int
  weekendPricing?: Int
  currency?: CURRENCY
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  email?: String
}

export interface PricingUpsertWithoutPlaceInput {
  update: PricingUpdateWithoutPlaceDataInput
  create: PricingCreateWithoutPlaceInput
}

export interface PoliciesWhereUniqueInput {
  id?: ID_Input
}

export interface LocationUpdateOneWithoutPlaceInput {
  create?: LocationCreateWithoutPlaceInput
  connect?: LocationWhereUniqueInput
  delete?: Boolean
  update?: LocationUpdateWithoutPlaceDataInput
  upsert?: LocationUpsertWithoutPlaceInput
}

export interface NeighbourhoodWhereUniqueInput {
  id?: ID_Input
}

export interface LocationUpdateWithoutPlaceDataInput {
  lat?: Float
  lng?: Float
  address?: String
  directions?: String
  neighbourHood?: NeighbourhoodUpdateOneWithoutLocationsInput
  user?: UserUpdateOneWithoutLocationInput
  experience?: ExperienceUpdateOneWithoutLocationInput
  restaurant?: RestaurantUpdateOneWithoutLocationInput
}

export interface AmenitiesWhereUniqueInput {
  id?: ID_Input
}

export interface UserUpdateOneWithoutLocationInput {
  create?: UserCreateWithoutLocationInput
  connect?: UserWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: UserUpdateWithoutLocationDataInput
  upsert?: UserUpsertWithoutLocationInput
}

export interface PaymentAccountWhereUniqueInput {
  id?: ID_Input
}

export interface UserUpdateWithoutLocationDataInput {
  firstName?: String
  lastName?: String
  email?: String
  password?: String
  phone?: String
  responseRate?: Float
  responseTime?: Int
  isSuperHost?: Boolean
  ownedPlaces?: PlaceUpdateManyWithoutHostInput
  bookings?: BookingUpdateManyWithoutBookeeInput
  paymentAccount?: PaymentAccountUpdateManyWithoutUserInput
  sentMessages?: MessageUpdateManyWithoutFromInput
  receivedMessages?: MessageUpdateManyWithoutToInput
  notifications?: NotificationUpdateManyWithoutUserInput
  profilePicture?: PictureUpdateOneInput
  hostingExperiences?: ExperienceUpdateManyWithoutHostInput
}

export interface NotificationWhereUniqueInput {
  id?: ID_Input
}

export interface PaymentAccountUpdateManyWithoutUserInput {
  create?: PaymentAccountCreateWithoutUserInput[] | PaymentAccountCreateWithoutUserInput
  connect?: PaymentAccountWhereUniqueInput[] | PaymentAccountWhereUniqueInput
  disconnect?: PaymentAccountWhereUniqueInput[] | PaymentAccountWhereUniqueInput
  delete?: PaymentAccountWhereUniqueInput[] | PaymentAccountWhereUniqueInput
  update?: PaymentAccountUpdateWithWhereUniqueWithoutUserInput[] | PaymentAccountUpdateWithWhereUniqueWithoutUserInput
  upsert?: PaymentAccountUpsertWithWhereUniqueWithoutUserInput[] | PaymentAccountUpsertWithWhereUniqueWithoutUserInput
}

export interface UserUpsertWithoutNotificationsInput {
  update: UserUpdateWithoutNotificationsDataInput
  create: UserCreateWithoutNotificationsInput
}

export interface PaymentAccountUpdateWithWhereUniqueWithoutUserInput {
  where: PaymentAccountWhereUniqueInput
  data: PaymentAccountUpdateWithoutUserDataInput
}

export interface MessageUpdateInput {
  deliveredAt?: DateTime
  readAt?: DateTime
  from?: UserUpdateOneWithoutSentMessagesInput
  to?: UserUpdateOneWithoutReceivedMessagesInput
}

export interface PaymentAccountUpdateWithoutUserDataInput {
  type?: PAYMENT_PROVIDER
  payments?: PaymentUpdateManyWithoutPaymentMethodInput
  paypal?: PaypalInformationUpdateOneWithoutPaymentAccountInput
  creditcard?: CreditCardInformationUpdateOneWithoutPaymentAccountInput
}

export interface CreditCardInformationUpdateInput {
  cardNumber?: String
  expiresOnMonth?: Int
  expiresOnYear?: Int
  securityCode?: String
  firstName?: String
  lastName?: String
  postalCode?: String
  country?: String
  paymentAccount?: PaymentAccountUpdateOneWithoutCreditcardInput
}

export interface PaymentUpdateManyWithoutPaymentMethodInput {
  create?: PaymentCreateWithoutPaymentMethodInput[] | PaymentCreateWithoutPaymentMethodInput
  connect?: PaymentWhereUniqueInput[] | PaymentWhereUniqueInput
  disconnect?: PaymentWhereUniqueInput[] | PaymentWhereUniqueInput
  delete?: PaymentWhereUniqueInput[] | PaymentWhereUniqueInput
  update?: PaymentUpdateWithWhereUniqueWithoutPaymentMethodInput[] | PaymentUpdateWithWhereUniqueWithoutPaymentMethodInput
  upsert?: PaymentUpsertWithWhereUniqueWithoutPaymentMethodInput[] | PaymentUpsertWithWhereUniqueWithoutPaymentMethodInput
}

export interface PaypalInformationUpdateInput {
  email?: String
  paymentAccount?: PaymentAccountUpdateOneWithoutPaypalInput
}

export interface PaymentUpdateWithWhereUniqueWithoutPaymentMethodInput {
  where: PaymentWhereUniqueInput
  data: PaymentUpdateWithoutPaymentMethodDataInput
}

export interface ReviewUpdateInput {
  text?: String
  stars?: Int
  accuracy?: Int
  location?: Int
  checkIn?: Int
  value?: Int
  cleanliness?: Int
  communication?: Int
  place?: PlaceUpdateOneWithoutReviewsInput
  experience?: ExperienceUpdateOneWithoutReviewsInput
}

export interface PaymentUpdateWithoutPaymentMethodDataInput {
  serviceFee?: Float
  placePrice?: Float
  totalPrice?: Float
  booking?: BookingUpdateOneWithoutPaymentInput
}

export interface AmenitiesUpdateInput {
  elevator?: Boolean
  petsAllowed?: Boolean
  internet?: Boolean
  kitchen?: Boolean
  wirelessInternet?: Boolean
  familyKidFriendly?: Boolean
  freeParkingOnPremises?: Boolean
  hotTub?: Boolean
  pool?: Boolean
  smokingAllowed?: Boolean
  wheelchairAccessible?: Boolean
  breakfast?: Boolean
  cableTv?: Boolean
  suitableForEvents?: Boolean
  dryer?: Boolean
  washer?: Boolean
  indoorFireplace?: Boolean
  tv?: Boolean
  heating?: Boolean
  hangers?: Boolean
  iron?: Boolean
  hairDryer?: Boolean
  doorman?: Boolean
  paidParkingOffPremises?: Boolean
  freeParkingOnStreet?: Boolean
  gym?: Boolean
  airConditioning?: Boolean
  shampoo?: Boolean
  essentials?: Boolean
  laptopFriendlyWorkspace?: Boolean
  privateEntrance?: Boolean
  buzzerWirelessIntercom?: Boolean
  babyBath?: Boolean
  babyMonitor?: Boolean
  babysitterRecommendations?: Boolean
  bathtub?: Boolean
  changingTable?: Boolean
  childrensBooksAndToys?: Boolean
  childrensDinnerware?: Boolean
  crib?: Boolean
  place?: PlaceUpdateOneWithoutAmenitiesInput
}

export interface BookingUpdateOneWithoutPaymentInput {
  create?: BookingCreateWithoutPaymentInput
  connect?: BookingWhereUniqueInput
  delete?: Boolean
  update?: BookingUpdateWithoutPaymentDataInput
  upsert?: BookingUpsertWithoutPaymentInput
}

export interface ExperienceCategoryUpdateInput {
  mainColor?: String
  name?: String
  experience?: ExperienceUpdateOneWithoutCategoryInput
}

export interface BookingUpdateWithoutPaymentDataInput {
  startDate?: DateTime
  endDate?: DateTime
  bookee?: UserUpdateOneWithoutBookingsInput
  place?: PlaceUpdateOneWithoutBookingsInput
}

export interface NeighbourhoodUpdateWithWhereUniqueWithoutCityInput {
  where: NeighbourhoodWhereUniqueInput
  data: NeighbourhoodUpdateWithoutCityDataInput
}

export interface UserUpdateOneWithoutBookingsInput {
  create?: UserCreateWithoutBookingsInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutBookingsDataInput
  upsert?: UserUpsertWithoutBookingsInput
}

export interface LocationUpdateWithoutNeighbourHoodDataInput {
  lat?: Float
  lng?: Float
  address?: String
  directions?: String
  user?: UserUpdateOneWithoutLocationInput
  place?: PlaceUpdateOneWithoutLocationInput
  experience?: ExperienceUpdateOneWithoutLocationInput
  restaurant?: RestaurantUpdateOneWithoutLocationInput
}

export interface UserUpdateWithoutBookingsDataInput {
  firstName?: String
  lastName?: String
  email?: String
  password?: String
  phone?: String
  responseRate?: Float
  responseTime?: Int
  isSuperHost?: Boolean
  ownedPlaces?: PlaceUpdateManyWithoutHostInput
  location?: LocationUpdateOneWithoutUserInput
  paymentAccount?: PaymentAccountUpdateManyWithoutUserInput
  sentMessages?: MessageUpdateManyWithoutFromInput
  receivedMessages?: MessageUpdateManyWithoutToInput
  notifications?: NotificationUpdateManyWithoutUserInput
  profilePicture?: PictureUpdateOneInput
  hostingExperiences?: ExperienceUpdateManyWithoutHostInput
}

export interface LocationUpdateInput {
  lat?: Float
  lng?: Float
  address?: String
  directions?: String
  neighbourHood?: NeighbourhoodUpdateOneWithoutLocationsInput
  user?: UserUpdateOneWithoutLocationInput
  place?: PlaceUpdateOneWithoutLocationInput
  experience?: ExperienceUpdateOneWithoutLocationInput
  restaurant?: RestaurantUpdateOneWithoutLocationInput
}

export interface MessageUpdateManyWithoutFromInput {
  create?: MessageCreateWithoutFromInput[] | MessageCreateWithoutFromInput
  connect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput
  disconnect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput
  delete?: MessageWhereUniqueInput[] | MessageWhereUniqueInput
  update?: MessageUpdateWithWhereUniqueWithoutFromInput[] | MessageUpdateWithWhereUniqueWithoutFromInput
  upsert?: MessageUpsertWithWhereUniqueWithoutFromInput[] | MessageUpsertWithWhereUniqueWithoutFromInput
}

export interface ViewsUpdateInput {
  lastWeek?: Int
  place?: PlaceUpdateOneWithoutViewsInput
}

export interface MessageUpdateWithWhereUniqueWithoutFromInput {
  where: MessageWhereUniqueInput
  data: MessageUpdateWithoutFromDataInput
}

export interface PlaceUpdateOneWithoutPoliciesInput {
  create?: PlaceCreateWithoutPoliciesInput
  connect?: PlaceWhereUniqueInput
  delete?: Boolean
  update?: PlaceUpdateWithoutPoliciesDataInput
  upsert?: PlaceUpsertWithoutPoliciesInput
}

export interface MessageUpdateWithoutFromDataInput {
  deliveredAt?: DateTime
  readAt?: DateTime
  to?: UserUpdateOneWithoutReceivedMessagesInput
}

export interface PlaceUpdateOneWithoutGuestRequirementsInput {
  create?: PlaceCreateWithoutGuestRequirementsInput
  connect?: PlaceWhereUniqueInput
  delete?: Boolean
  update?: PlaceUpdateWithoutGuestRequirementsDataInput
  upsert?: PlaceUpsertWithoutGuestRequirementsInput
}

export interface UserUpdateOneWithoutReceivedMessagesInput {
  create?: UserCreateWithoutReceivedMessagesInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutReceivedMessagesDataInput
  upsert?: UserUpsertWithoutReceivedMessagesInput
}

export interface PlaceUpdateOneWithoutPricingInput {
  create?: PlaceCreateWithoutPricingInput
  connect?: PlaceWhereUniqueInput
  delete?: Boolean
  update?: PlaceUpdateWithoutPricingDataInput
  upsert?: PlaceUpsertWithoutPricingInput
}

export interface UserUpdateWithoutReceivedMessagesDataInput {
  firstName?: String
  lastName?: String
  email?: String
  password?: String
  phone?: String
  responseRate?: Float
  responseTime?: Int
  isSuperHost?: Boolean
  ownedPlaces?: PlaceUpdateManyWithoutHostInput
  location?: LocationUpdateOneWithoutUserInput
  bookings?: BookingUpdateManyWithoutBookeeInput
  paymentAccount?: PaymentAccountUpdateManyWithoutUserInput
  sentMessages?: MessageUpdateManyWithoutFromInput
  notifications?: NotificationUpdateManyWithoutUserInput
  profilePicture?: PictureUpdateOneInput
  hostingExperiences?: ExperienceUpdateManyWithoutHostInput
}

export interface ReviewUpsertWithWhereUniqueWithoutPlaceInput {
  where: ReviewWhereUniqueInput
  update: ReviewUpdateWithoutPlaceDataInput
  create: ReviewCreateWithoutPlaceInput
}

export interface NotificationUpdateManyWithoutUserInput {
  create?: NotificationCreateWithoutUserInput[] | NotificationCreateWithoutUserInput
  connect?: NotificationWhereUniqueInput[] | NotificationWhereUniqueInput
  disconnect?: NotificationWhereUniqueInput[] | NotificationWhereUniqueInput
  delete?: NotificationWhereUniqueInput[] | NotificationWhereUniqueInput
  update?: NotificationUpdateWithWhereUniqueWithoutUserInput[] | NotificationUpdateWithWhereUniqueWithoutUserInput
  upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput[] | NotificationUpsertWithWhereUniqueWithoutUserInput
}

export interface PlaceUpsertWithoutLocationInput {
  update: PlaceUpdateWithoutLocationDataInput
  create: PlaceCreateWithoutLocationInput
}

export interface NotificationUpdateWithWhereUniqueWithoutUserInput {
  where: NotificationWhereUniqueInput
  data: NotificationUpdateWithoutUserDataInput
}

export interface LocationUpsertWithoutPlaceInput {
  update: LocationUpdateWithoutPlaceDataInput
  create: LocationCreateWithoutPlaceInput
}

export interface NotificationUpdateWithoutUserDataInput {
  type?: NOTIFICATION_TYPE
  link?: String
  readDate?: DateTime
}

export interface UserCreateInput {
  firstName: String
  lastName: String
  email: String
  password: String
  phone: String
  responseRate?: Float
  responseTime?: Int
  isSuperHost?: Boolean
  ownedPlaces?: PlaceCreateManyWithoutHostInput
  location?: LocationCreateOneWithoutUserInput
  bookings?: BookingCreateManyWithoutBookeeInput
  paymentAccount?: PaymentAccountCreateManyWithoutUserInput
  sentMessages?: MessageCreateManyWithoutFromInput
  receivedMessages?: MessageCreateManyWithoutToInput
  notifications?: NotificationCreateManyWithoutUserInput
  profilePicture?: PictureCreateOneInput
  hostingExperiences?: ExperienceCreateManyWithoutHostInput
}

export interface NotificationUpsertWithWhereUniqueWithoutUserInput {
  where: NotificationWhereUniqueInput
  update: NotificationUpdateWithoutUserDataInput
  create: NotificationCreateWithoutUserInput
}

export interface ReviewCreateWithoutPlaceInput {
  text: String
  stars: Int
  accuracy: Int
  location: Int
  checkIn: Int
  value: Int
  cleanliness: Int
  communication: Int
  experience?: ExperienceCreateOneWithoutReviewsInput
}

export interface ExperienceUpdateManyWithoutHostInput {
  create?: ExperienceCreateWithoutHostInput[] | ExperienceCreateWithoutHostInput
  connect?: ExperienceWhereUniqueInput[] | ExperienceWhereUniqueInput
  disconnect?: ExperienceWhereUniqueInput[] | ExperienceWhereUniqueInput
  delete?: ExperienceWhereUniqueInput[] | ExperienceWhereUniqueInput
  update?: ExperienceUpdateWithWhereUniqueWithoutHostInput[] | ExperienceUpdateWithWhereUniqueWithoutHostInput
  upsert?: ExperienceUpsertWithWhereUniqueWithoutHostInput[] | ExperienceUpsertWithWhereUniqueWithoutHostInput
}

export interface ExperienceCategoryCreateWithoutExperienceInput {
  mainColor?: String
  name: String
}

export interface ExperienceUpdateWithWhereUniqueWithoutHostInput {
  where: ExperienceWhereUniqueInput
  data: ExperienceUpdateWithoutHostDataInput
}

export interface LocationCreateWithoutUserInput {
  lat: Float
  lng: Float
  address?: String
  directions?: String
  neighbourHood?: NeighbourhoodCreateOneWithoutLocationsInput
  place?: PlaceCreateOneWithoutLocationInput
  experience?: ExperienceCreateOneWithoutLocationInput
  restaurant?: RestaurantCreateOneWithoutLocationInput
}

export interface ExperienceUpdateWithoutHostDataInput {
  title?: String
  pricePerPerson?: Int
  popularity?: Int
  category?: ExperienceCategoryUpdateOneWithoutExperienceInput
  location?: LocationUpdateOneWithoutExperienceInput
  reviews?: ReviewUpdateManyWithoutExperienceInput
  preview?: PictureUpdateOneInput
}

export interface PictureCreateInput {
  url: String
}

export interface LocationUpdateOneWithoutExperienceInput {
  create?: LocationCreateWithoutExperienceInput
  connect?: LocationWhereUniqueInput
  delete?: Boolean
  update?: LocationUpdateWithoutExperienceDataInput
  upsert?: LocationUpsertWithoutExperienceInput
}

export interface PlaceCreateWithoutLocationInput {
  name?: String
  size?: PLACE_SIZES
  shortDescription: String
  description: String
  slug: String
  maxGuests: Int
  numBedrooms: Int
  numBeds: Int
  numBaths: Int
  popularity: Int
  reviews?: ReviewCreateManyWithoutPlaceInput
  amenities: AmenitiesCreateOneWithoutPlaceInput
  host: UserCreateOneWithoutOwnedPlacesInput
  pricing: PricingCreateOneWithoutPlaceInput
  views: ViewsCreateOneWithoutPlaceInput
  guestRequirements?: GuestRequirementsCreateOneWithoutPlaceInput
  policies?: PoliciesCreateOneWithoutPlaceInput
  houseRules?: HouseRulesCreateOneInput
  bookings?: BookingCreateManyWithoutPlaceInput
  pictures?: PictureCreateManyInput
}

export interface LocationUpdateWithoutExperienceDataInput {
  lat?: Float
  lng?: Float
  address?: String
  directions?: String
  neighbourHood?: NeighbourhoodUpdateOneWithoutLocationsInput
  user?: UserUpdateOneWithoutLocationInput
  place?: PlaceUpdateOneWithoutLocationInput
  restaurant?: RestaurantUpdateOneWithoutLocationInput
}

export interface UserCreateWithoutOwnedPlacesInput {
  firstName: String
  lastName: String
  email: String
  password: String
  phone: String
  responseRate?: Float
  responseTime?: Int
  isSuperHost?: Boolean
  location?: LocationCreateOneWithoutUserInput
  bookings?: BookingCreateManyWithoutBookeeInput
  paymentAccount?: PaymentAccountCreateManyWithoutUserInput
  sentMessages?: MessageCreateManyWithoutFromInput
  receivedMessages?: MessageCreateManyWithoutToInput
  notifications?: NotificationCreateManyWithoutUserInput
  profilePicture?: PictureCreateOneInput
  hostingExperiences?: ExperienceCreateManyWithoutHostInput
}

export interface RestaurantUpdateOneWithoutLocationInput {
  create?: RestaurantCreateWithoutLocationInput
  connect?: RestaurantWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: RestaurantUpdateWithoutLocationDataInput
  upsert?: RestaurantUpsertWithoutLocationInput
}

export interface PlaceCreateWithoutBookingsInput {
  name?: String
  size?: PLACE_SIZES
  shortDescription: String
  description: String
  slug: String
  maxGuests: Int
  numBedrooms: Int
  numBeds: Int
  numBaths: Int
  popularity: Int
  reviews?: ReviewCreateManyWithoutPlaceInput
  amenities: AmenitiesCreateOneWithoutPlaceInput
  host: UserCreateOneWithoutOwnedPlacesInput
  pricing: PricingCreateOneWithoutPlaceInput
  location: LocationCreateOneWithoutPlaceInput
  views: ViewsCreateOneWithoutPlaceInput
  guestRequirements?: GuestRequirementsCreateOneWithoutPlaceInput
  policies?: PoliciesCreateOneWithoutPlaceInput
  houseRules?: HouseRulesCreateOneInput
  pictures?: PictureCreateManyInput
}

export interface RestaurantUpdateWithoutLocationDataInput {
  title?: String
  avgPricePerPerson?: Int
  isCurated?: Boolean
  slug?: String
  popularity?: Int
  pictures?: PictureUpdateManyInput
}

export interface LocationCreateWithoutPlaceInput {
  lat: Float
  lng: Float
  address?: String
  directions?: String
  neighbourHood?: NeighbourhoodCreateOneWithoutLocationsInput
  user?: UserCreateOneWithoutLocationInput
  experience?: ExperienceCreateOneWithoutLocationInput
  restaurant?: RestaurantCreateOneWithoutLocationInput
}

export interface PictureUpdateManyInput {
  create?: PictureCreateInput[] | PictureCreateInput
}

export interface PaymentAccountCreateWithoutUserInput {
  type?: PAYMENT_PROVIDER
  payments?: PaymentCreateManyWithoutPaymentMethodInput
  paypal?: PaypalInformationCreateOneWithoutPaymentAccountInput
  creditcard?: CreditCardInformationCreateOneWithoutPaymentAccountInput
}

export interface RestaurantUpsertWithoutLocationInput {
  update: RestaurantUpdateWithoutLocationDataInput
  create: RestaurantCreateWithoutLocationInput
}

export interface BookingCreateWithoutPaymentInput {
  startDate: DateTime
  endDate: DateTime
  bookee: UserCreateOneWithoutBookingsInput
  place: PlaceCreateOneWithoutBookingsInput
}

export interface LocationUpsertWithoutExperienceInput {
  update: LocationUpdateWithoutExperienceDataInput
  create: LocationCreateWithoutExperienceInput
}

export interface MessageCreateWithoutFromInput {
  deliveredAt: DateTime
  readAt: DateTime
  to: UserCreateOneWithoutReceivedMessagesInput
}

export interface ReviewUpdateManyWithoutExperienceInput {
  create?: ReviewCreateWithoutExperienceInput[] | ReviewCreateWithoutExperienceInput
  connect?: ReviewWhereUniqueInput[] | ReviewWhereUniqueInput
  disconnect?: ReviewWhereUniqueInput[] | ReviewWhereUniqueInput
  delete?: ReviewWhereUniqueInput[] | ReviewWhereUniqueInput
  update?: ReviewUpdateWithWhereUniqueWithoutExperienceInput[] | ReviewUpdateWithWhereUniqueWithoutExperienceInput
  upsert?: ReviewUpsertWithWhereUniqueWithoutExperienceInput[] | ReviewUpsertWithWhereUniqueWithoutExperienceInput
}

export interface NotificationCreateWithoutUserInput {
  type?: NOTIFICATION_TYPE
  link: String
  readDate: DateTime
}

export interface ReviewUpdateWithWhereUniqueWithoutExperienceInput {
  where: ReviewWhereUniqueInput
  data: ReviewUpdateWithoutExperienceDataInput
}

export interface LocationCreateWithoutExperienceInput {
  lat: Float
  lng: Float
  address?: String
  directions?: String
  neighbourHood?: NeighbourhoodCreateOneWithoutLocationsInput
  user?: UserCreateOneWithoutLocationInput
  place?: PlaceCreateOneWithoutLocationInput
  restaurant?: RestaurantCreateOneWithoutLocationInput
}

export interface ReviewUpdateWithoutExperienceDataInput {
  text?: String
  stars?: Int
  accuracy?: Int
  location?: Int
  checkIn?: Int
  value?: Int
  cleanliness?: Int
  communication?: Int
  place?: PlaceUpdateOneWithoutReviewsInput
}

export interface ReviewCreateManyWithoutExperienceInput {
  create?: ReviewCreateWithoutExperienceInput[] | ReviewCreateWithoutExperienceInput
  connect?: ReviewWhereUniqueInput[] | ReviewWhereUniqueInput
}

export interface PlaceUpdateOneWithoutReviewsInput {
  create?: PlaceCreateWithoutReviewsInput
  connect?: PlaceWhereUniqueInput
  delete?: Boolean
  update?: PlaceUpdateWithoutReviewsDataInput
  upsert?: PlaceUpsertWithoutReviewsInput
}

export interface PaymentWhereInput {
  AND?: PaymentWhereInput[] | PaymentWhereInput
  OR?: PaymentWhereInput[] | PaymentWhereInput
  NOT?: PaymentWhereInput[] | PaymentWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  serviceFee?: Float
  serviceFee_not?: Float
  serviceFee_in?: Float[] | Float
  serviceFee_not_in?: Float[] | Float
  serviceFee_lt?: Float
  serviceFee_lte?: Float
  serviceFee_gt?: Float
  serviceFee_gte?: Float
  placePrice?: Float
  placePrice_not?: Float
  placePrice_in?: Float[] | Float
  placePrice_not_in?: Float[] | Float
  placePrice_lt?: Float
  placePrice_lte?: Float
  placePrice_gt?: Float
  placePrice_gte?: Float
  totalPrice?: Float
  totalPrice_not?: Float
  totalPrice_in?: Float[] | Float
  totalPrice_not_in?: Float[] | Float
  totalPrice_lt?: Float
  totalPrice_lte?: Float
  totalPrice_gt?: Float
  totalPrice_gte?: Float
  booking?: BookingWhereInput
  paymentMethod?: PaymentAccountWhereInput
}

export interface PlaceUpdateWithoutReviewsDataInput {
  name?: String
  size?: PLACE_SIZES
  shortDescription?: String
  description?: String
  slug?: String
  maxGuests?: Int
  numBedrooms?: Int
  numBeds?: Int
  numBaths?: Int
  popularity?: Int
  amenities?: AmenitiesUpdateOneWithoutPlaceInput
  host?: UserUpdateOneWithoutOwnedPlacesInput
  pricing?: PricingUpdateOneWithoutPlaceInput
  location?: LocationUpdateOneWithoutPlaceInput
  views?: ViewsUpdateOneWithoutPlaceInput
  guestRequirements?: GuestRequirementsUpdateOneWithoutPlaceInput
  policies?: PoliciesUpdateOneWithoutPlaceInput
  houseRules?: HouseRulesUpdateOneInput
  bookings?: BookingUpdateManyWithoutPlaceInput
  pictures?: PictureUpdateManyInput
}

export interface BookingSubscriptionWhereInput {
  AND?: BookingSubscriptionWhereInput[] | BookingSubscriptionWhereInput
  OR?: BookingSubscriptionWhereInput[] | BookingSubscriptionWhereInput
  NOT?: BookingSubscriptionWhereInput[] | BookingSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: BookingWhereInput
}

export interface ViewsUpdateOneWithoutPlaceInput {
  create?: ViewsCreateWithoutPlaceInput
  connect?: ViewsWhereUniqueInput
  delete?: Boolean
  update?: ViewsUpdateWithoutPlaceDataInput
  upsert?: ViewsUpsertWithoutPlaceInput
}

export interface CitySubscriptionWhereInput {
  AND?: CitySubscriptionWhereInput[] | CitySubscriptionWhereInput
  OR?: CitySubscriptionWhereInput[] | CitySubscriptionWhereInput
  NOT?: CitySubscriptionWhereInput[] | CitySubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: CityWhereInput
}

export interface ViewsUpdateWithoutPlaceDataInput {
  lastWeek?: Int
}

export interface GuestRequirementsSubscriptionWhereInput {
  AND?: GuestRequirementsSubscriptionWhereInput[] | GuestRequirementsSubscriptionWhereInput
  OR?: GuestRequirementsSubscriptionWhereInput[] | GuestRequirementsSubscriptionWhereInput
  NOT?: GuestRequirementsSubscriptionWhereInput[] | GuestRequirementsSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: GuestRequirementsWhereInput
}

export interface ViewsUpsertWithoutPlaceInput {
  update: ViewsUpdateWithoutPlaceDataInput
  create: ViewsCreateWithoutPlaceInput
}

export interface NeighbourhoodWhereInput {
  AND?: NeighbourhoodWhereInput[] | NeighbourhoodWhereInput
  OR?: NeighbourhoodWhereInput[] | NeighbourhoodWhereInput
  NOT?: NeighbourhoodWhereInput[] | NeighbourhoodWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  slug?: String
  slug_not?: String
  slug_in?: String[] | String
  slug_not_in?: String[] | String
  slug_lt?: String
  slug_lte?: String
  slug_gt?: String
  slug_gte?: String
  slug_contains?: String
  slug_not_contains?: String
  slug_starts_with?: String
  slug_not_starts_with?: String
  slug_ends_with?: String
  slug_not_ends_with?: String
  featured?: Boolean
  featured_not?: Boolean
  popularity?: Int
  popularity_not?: Int
  popularity_in?: Int[] | Int
  popularity_not_in?: Int[] | Int
  popularity_lt?: Int
  popularity_lte?: Int
  popularity_gt?: Int
  popularity_gte?: Int
  locations_every?: LocationWhereInput
  locations_some?: LocationWhereInput
  locations_none?: LocationWhereInput
  homePreview?: PictureWhereInput
  city?: CityWhereInput
}

export interface GuestRequirementsUpdateOneWithoutPlaceInput {
  create?: GuestRequirementsCreateWithoutPlaceInput
  connect?: GuestRequirementsWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: GuestRequirementsUpdateWithoutPlaceDataInput
  upsert?: GuestRequirementsUpsertWithoutPlaceInput
}

export interface LocationUpsertWithoutRestaurantInput {
  update: LocationUpdateWithoutRestaurantDataInput
  create: LocationCreateWithoutRestaurantInput
}

export interface GuestRequirementsUpdateWithoutPlaceDataInput {
  govIssuedId?: Boolean
  recommendationsFromOtherHosts?: Boolean
  guestTripInformation?: Boolean
}

export interface ViewsWhereUniqueInput {
  id?: ID_Input
}

export interface GuestRequirementsUpsertWithoutPlaceInput {
  update: GuestRequirementsUpdateWithoutPlaceDataInput
  create: GuestRequirementsCreateWithoutPlaceInput
}

export interface BookingWhereUniqueInput {
  id?: ID_Input
}

export interface PoliciesUpdateOneWithoutPlaceInput {
  create?: PoliciesCreateWithoutPlaceInput
  connect?: PoliciesWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: PoliciesUpdateWithoutPlaceDataInput
  upsert?: PoliciesUpsertWithoutPlaceInput
}

export interface LocationUpdateOneWithoutRestaurantInput {
  create?: LocationCreateWithoutRestaurantInput
  connect?: LocationWhereUniqueInput
  delete?: Boolean
  update?: LocationUpdateWithoutRestaurantDataInput
  upsert?: LocationUpsertWithoutRestaurantInput
}

export interface PoliciesUpdateWithoutPlaceDataInput {
  checkInStartTime?: Float
  checkInEndTime?: Float
  checkoutTime?: Float
}

export interface PaymentAccountUpdateWithoutCreditcardDataInput {
  type?: PAYMENT_PROVIDER
  user?: UserUpdateOneWithoutPaymentAccountInput
  payments?: PaymentUpdateManyWithoutPaymentMethodInput
  paypal?: PaypalInformationUpdateOneWithoutPaymentAccountInput
}

export interface PoliciesUpsertWithoutPlaceInput {
  update: PoliciesUpdateWithoutPlaceDataInput
  create: PoliciesCreateWithoutPlaceInput
}

export interface PaymentUpdateInput {
  serviceFee?: Float
  placePrice?: Float
  totalPrice?: Float
  booking?: BookingUpdateOneWithoutPaymentInput
  paymentMethod?: PaymentAccountUpdateOneWithoutPaymentsInput
}

export interface HouseRulesUpdateOneInput {
  create?: HouseRulesCreateInput
  connect?: HouseRulesWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: HouseRulesUpdateDataInput
  upsert?: HouseRulesUpsertNestedInput
}

export interface ExperienceUpdateWithoutCategoryDataInput {
  title?: String
  pricePerPerson?: Int
  popularity?: Int
  host?: UserUpdateOneWithoutHostingExperiencesInput
  location?: LocationUpdateOneWithoutExperienceInput
  reviews?: ReviewUpdateManyWithoutExperienceInput
  preview?: PictureUpdateOneInput
}

export interface HouseRulesUpdateDataInput {
  suitableForChildren?: Boolean
  suitableForInfants?: Boolean
  petsAllowed?: Boolean
  smokingAllowed?: Boolean
  partiesAndEventsAllowed?: Boolean
  additionalRules?: String
}

export interface CityUpdateInput {
  name?: String
  neighbourhoods?: NeighbourhoodUpdateManyWithoutCityInput
}

export interface HouseRulesUpsertNestedInput {
  update: HouseRulesUpdateDataInput
  create: HouseRulesCreateInput
}

export interface PlaceUpdateWithoutViewsDataInput {
  name?: String
  size?: PLACE_SIZES
  shortDescription?: String
  description?: String
  slug?: String
  maxGuests?: Int
  numBedrooms?: Int
  numBeds?: Int
  numBaths?: Int
  popularity?: Int
  reviews?: ReviewUpdateManyWithoutPlaceInput
  amenities?: AmenitiesUpdateOneWithoutPlaceInput
  host?: UserUpdateOneWithoutOwnedPlacesInput
  pricing?: PricingUpdateOneWithoutPlaceInput
  location?: LocationUpdateOneWithoutPlaceInput
  guestRequirements?: GuestRequirementsUpdateOneWithoutPlaceInput
  policies?: PoliciesUpdateOneWithoutPlaceInput
  houseRules?: HouseRulesUpdateOneInput
  bookings?: BookingUpdateManyWithoutPlaceInput
  pictures?: PictureUpdateManyInput
}

export interface BookingUpdateManyWithoutPlaceInput {
  create?: BookingCreateWithoutPlaceInput[] | BookingCreateWithoutPlaceInput
  connect?: BookingWhereUniqueInput[] | BookingWhereUniqueInput
  disconnect?: BookingWhereUniqueInput[] | BookingWhereUniqueInput
  delete?: BookingWhereUniqueInput[] | BookingWhereUniqueInput
  update?: BookingUpdateWithWhereUniqueWithoutPlaceInput[] | BookingUpdateWithWhereUniqueWithoutPlaceInput
  upsert?: BookingUpsertWithWhereUniqueWithoutPlaceInput[] | BookingUpsertWithWhereUniqueWithoutPlaceInput
}

export interface PlaceUpsertWithoutGuestRequirementsInput {
  update: PlaceUpdateWithoutGuestRequirementsDataInput
  create: PlaceCreateWithoutGuestRequirementsInput
}

export interface BookingUpdateWithWhereUniqueWithoutPlaceInput {
  where: BookingWhereUniqueInput
  data: BookingUpdateWithoutPlaceDataInput
}

export interface PlaceUpdateInput {
  name?: String
  size?: PLACE_SIZES
  shortDescription?: String
  description?: String
  slug?: String
  maxGuests?: Int
  numBedrooms?: Int
  numBeds?: Int
  numBaths?: Int
  popularity?: Int
  reviews?: ReviewUpdateManyWithoutPlaceInput
  amenities?: AmenitiesUpdateOneWithoutPlaceInput
  host?: UserUpdateOneWithoutOwnedPlacesInput
  pricing?: PricingUpdateOneWithoutPlaceInput
  location?: LocationUpdateOneWithoutPlaceInput
  views?: ViewsUpdateOneWithoutPlaceInput
  guestRequirements?: GuestRequirementsUpdateOneWithoutPlaceInput
  policies?: PoliciesUpdateOneWithoutPlaceInput
  houseRules?: HouseRulesUpdateOneInput
  bookings?: BookingUpdateManyWithoutPlaceInput
  pictures?: PictureUpdateManyInput
}

export interface BookingUpdateWithoutPlaceDataInput {
  startDate?: DateTime
  endDate?: DateTime
  bookee?: UserUpdateOneWithoutBookingsInput
  payment?: PaymentUpdateOneWithoutBookingInput
}

export interface BookingUpsertWithWhereUniqueWithoutBookeeInput {
  where: BookingWhereUniqueInput
  update: BookingUpdateWithoutBookeeDataInput
  create: BookingCreateWithoutBookeeInput
}

export interface PaymentUpdateOneWithoutBookingInput {
  create?: PaymentCreateWithoutBookingInput
  connect?: PaymentWhereUniqueInput
  delete?: Boolean
  update?: PaymentUpdateWithoutBookingDataInput
  upsert?: PaymentUpsertWithoutBookingInput
}

export interface PlaceCreateWithoutHostInput {
  name?: String
  size?: PLACE_SIZES
  shortDescription: String
  description: String
  slug: String
  maxGuests: Int
  numBedrooms: Int
  numBeds: Int
  numBaths: Int
  popularity: Int
  reviews?: ReviewCreateManyWithoutPlaceInput
  amenities: AmenitiesCreateOneWithoutPlaceInput
  pricing: PricingCreateOneWithoutPlaceInput
  location: LocationCreateOneWithoutPlaceInput
  views: ViewsCreateOneWithoutPlaceInput
  guestRequirements?: GuestRequirementsCreateOneWithoutPlaceInput
  policies?: PoliciesCreateOneWithoutPlaceInput
  houseRules?: HouseRulesCreateOneInput
  bookings?: BookingCreateManyWithoutPlaceInput
  pictures?: PictureCreateManyInput
}

export interface PaymentUpdateWithoutBookingDataInput {
  serviceFee?: Float
  placePrice?: Float
  totalPrice?: Float
  paymentMethod?: PaymentAccountUpdateOneWithoutPaymentsInput
}

export interface UserCreateWithoutHostingExperiencesInput {
  firstName: String
  lastName: String
  email: String
  password: String
  phone: String
  responseRate?: Float
  responseTime?: Int
  isSuperHost?: Boolean
  ownedPlaces?: PlaceCreateManyWithoutHostInput
  location?: LocationCreateOneWithoutUserInput
  bookings?: BookingCreateManyWithoutBookeeInput
  paymentAccount?: PaymentAccountCreateManyWithoutUserInput
  sentMessages?: MessageCreateManyWithoutFromInput
  receivedMessages?: MessageCreateManyWithoutToInput
  notifications?: NotificationCreateManyWithoutUserInput
  profilePicture?: PictureCreateOneInput
}

export interface PaymentAccountUpdateOneWithoutPaymentsInput {
  create?: PaymentAccountCreateWithoutPaymentsInput
  connect?: PaymentAccountWhereUniqueInput
  delete?: Boolean
  update?: PaymentAccountUpdateWithoutPaymentsDataInput
  upsert?: PaymentAccountUpsertWithoutPaymentsInput
}

export interface CityCreateWithoutNeighbourhoodsInput {
  name: String
}

export interface PaymentAccountUpdateWithoutPaymentsDataInput {
  type?: PAYMENT_PROVIDER
  user?: UserUpdateOneWithoutPaymentAccountInput
  paypal?: PaypalInformationUpdateOneWithoutPaymentAccountInput
  creditcard?: CreditCardInformationUpdateOneWithoutPaymentAccountInput
}

export interface BookingCreateWithoutBookeeInput {
  startDate: DateTime
  endDate: DateTime
  place: PlaceCreateOneWithoutBookingsInput
  payment: PaymentCreateOneWithoutBookingInput
}

export interface UserUpdateOneWithoutPaymentAccountInput {
  create?: UserCreateWithoutPaymentAccountInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutPaymentAccountDataInput
  upsert?: UserUpsertWithoutPaymentAccountInput
}

export interface UserCreateWithoutLocationInput {
  firstName: String
  lastName: String
  email: String
  password: String
  phone: String
  responseRate?: Float
  responseTime?: Int
  isSuperHost?: Boolean
  ownedPlaces?: PlaceCreateManyWithoutHostInput
  bookings?: BookingCreateManyWithoutBookeeInput
  paymentAccount?: PaymentAccountCreateManyWithoutUserInput
  sentMessages?: MessageCreateManyWithoutFromInput
  receivedMessages?: MessageCreateManyWithoutToInput
  notifications?: NotificationCreateManyWithoutUserInput
  profilePicture?: PictureCreateOneInput
  hostingExperiences?: ExperienceCreateManyWithoutHostInput
}

export interface UserUpdateWithoutPaymentAccountDataInput {
  firstName?: String
  lastName?: String
  email?: String
  password?: String
  phone?: String
  responseRate?: Float
  responseTime?: Int
  isSuperHost?: Boolean
  ownedPlaces?: PlaceUpdateManyWithoutHostInput
  location?: LocationUpdateOneWithoutUserInput
  bookings?: BookingUpdateManyWithoutBookeeInput
  sentMessages?: MessageUpdateManyWithoutFromInput
  receivedMessages?: MessageUpdateManyWithoutToInput
  notifications?: NotificationUpdateManyWithoutUserInput
  profilePicture?: PictureUpdateOneInput
  hostingExperiences?: ExperienceUpdateManyWithoutHostInput
}

export interface UserCreateWithoutBookingsInput {
  firstName: String
  lastName: String
  email: String
  password: String
  phone: String
  responseRate?: Float
  responseTime?: Int
  isSuperHost?: Boolean
  ownedPlaces?: PlaceCreateManyWithoutHostInput
  location?: LocationCreateOneWithoutUserInput
  paymentAccount?: PaymentAccountCreateManyWithoutUserInput
  sentMessages?: MessageCreateManyWithoutFromInput
  receivedMessages?: MessageCreateManyWithoutToInput
  notifications?: NotificationCreateManyWithoutUserInput
  profilePicture?: PictureCreateOneInput
  hostingExperiences?: ExperienceCreateManyWithoutHostInput
}

export interface MessageUpdateManyWithoutToInput {
  create?: MessageCreateWithoutToInput[] | MessageCreateWithoutToInput
  connect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput
  disconnect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput
  delete?: MessageWhereUniqueInput[] | MessageWhereUniqueInput
  update?: MessageUpdateWithWhereUniqueWithoutToInput[] | MessageUpdateWithWhereUniqueWithoutToInput
  upsert?: MessageUpsertWithWhereUniqueWithoutToInput[] | MessageUpsertWithWhereUniqueWithoutToInput
}

export interface ExperienceCreateWithoutHostInput {
  title: String
  pricePerPerson: Int
  popularity: Int
  category?: ExperienceCategoryCreateOneWithoutExperienceInput
  location: LocationCreateOneWithoutExperienceInput
  reviews?: ReviewCreateManyWithoutExperienceInput
  preview: PictureCreateOneInput
}

export interface MessageUpdateWithWhereUniqueWithoutToInput {
  where: MessageWhereUniqueInput
  data: MessageUpdateWithoutToDataInput
}

export interface PlaceCreateOneWithoutReviewsInput {
  create?: PlaceCreateWithoutReviewsInput
  connect?: PlaceWhereUniqueInput
}

export interface MessageUpdateWithoutToDataInput {
  deliveredAt?: DateTime
  readAt?: DateTime
  from?: UserUpdateOneWithoutSentMessagesInput
}

export interface AmenitiesSubscriptionWhereInput {
  AND?: AmenitiesSubscriptionWhereInput[] | AmenitiesSubscriptionWhereInput
  OR?: AmenitiesSubscriptionWhereInput[] | AmenitiesSubscriptionWhereInput
  NOT?: AmenitiesSubscriptionWhereInput[] | AmenitiesSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: AmenitiesWhereInput
}

export interface UserUpdateOneWithoutSentMessagesInput {
  create?: UserCreateWithoutSentMessagesInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutSentMessagesDataInput
  upsert?: UserUpsertWithoutSentMessagesInput
}

export interface RestaurantWhereInput {
  AND?: RestaurantWhereInput[] | RestaurantWhereInput
  OR?: RestaurantWhereInput[] | RestaurantWhereInput
  NOT?: RestaurantWhereInput[] | RestaurantWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  title?: String
  title_not?: String
  title_in?: String[] | String
  title_not_in?: String[] | String
  title_lt?: String
  title_lte?: String
  title_gt?: String
  title_gte?: String
  title_contains?: String
  title_not_contains?: String
  title_starts_with?: String
  title_not_starts_with?: String
  title_ends_with?: String
  title_not_ends_with?: String
  avgPricePerPerson?: Int
  avgPricePerPerson_not?: Int
  avgPricePerPerson_in?: Int[] | Int
  avgPricePerPerson_not_in?: Int[] | Int
  avgPricePerPerson_lt?: Int
  avgPricePerPerson_lte?: Int
  avgPricePerPerson_gt?: Int
  avgPricePerPerson_gte?: Int
  isCurated?: Boolean
  isCurated_not?: Boolean
  slug?: String
  slug_not?: String
  slug_in?: String[] | String
  slug_not_in?: String[] | String
  slug_lt?: String
  slug_lte?: String
  slug_gt?: String
  slug_gte?: String
  slug_contains?: String
  slug_not_contains?: String
  slug_starts_with?: String
  slug_not_starts_with?: String
  slug_ends_with?: String
  slug_not_ends_with?: String
  popularity?: Int
  popularity_not?: Int
  popularity_in?: Int[] | Int
  popularity_not_in?: Int[] | Int
  popularity_lt?: Int
  popularity_lte?: Int
  popularity_gt?: Int
  popularity_gte?: Int
  pictures_every?: PictureWhereInput
  pictures_some?: PictureWhereInput
  pictures_none?: PictureWhereInput
  location?: LocationWhereInput
}

export interface UserUpdateWithoutSentMessagesDataInput {
  firstName?: String
  lastName?: String
  email?: String
  password?: String
  phone?: String
  responseRate?: Float
  responseTime?: Int
  isSuperHost?: Boolean
  ownedPlaces?: PlaceUpdateManyWithoutHostInput
  location?: LocationUpdateOneWithoutUserInput
  bookings?: BookingUpdateManyWithoutBookeeInput
  paymentAccount?: PaymentAccountUpdateManyWithoutUserInput
  receivedMessages?: MessageUpdateManyWithoutToInput
  notifications?: NotificationUpdateManyWithoutUserInput
  profilePicture?: PictureUpdateOneInput
  hostingExperiences?: ExperienceUpdateManyWithoutHostInput
}

export interface PricingWhereUniqueInput {
  id?: ID_Input
}

export interface UserUpsertWithoutSentMessagesInput {
  update: UserUpdateWithoutSentMessagesDataInput
  create: UserCreateWithoutSentMessagesInput
}

export interface CreditCardInformationWhereUniqueInput {
  id?: ID_Input
}

export interface MessageUpsertWithWhereUniqueWithoutToInput {
  where: MessageWhereUniqueInput
  update: MessageUpdateWithoutToDataInput
  create: MessageCreateWithoutToInput
}

export interface PaymentAccountUpdateWithoutPaypalDataInput {
  type?: PAYMENT_PROVIDER
  user?: UserUpdateOneWithoutPaymentAccountInput
  payments?: PaymentUpdateManyWithoutPaymentMethodInput
  creditcard?: CreditCardInformationUpdateOneWithoutPaymentAccountInput
}

export interface UserUpsertWithoutPaymentAccountInput {
  update: UserUpdateWithoutPaymentAccountDataInput
  create: UserCreateWithoutPaymentAccountInput
}

export interface NeighbourhoodUpsertWithWhereUniqueWithoutCityInput {
  where: NeighbourhoodWhereUniqueInput
  update: NeighbourhoodUpdateWithoutCityDataInput
  create: NeighbourhoodCreateWithoutCityInput
}

export interface PaypalInformationUpdateOneWithoutPaymentAccountInput {
  create?: PaypalInformationCreateWithoutPaymentAccountInput
  connect?: PaypalInformationWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: PaypalInformationUpdateWithoutPaymentAccountDataInput
  upsert?: PaypalInformationUpsertWithoutPaymentAccountInput
}

export interface PlaceUpsertWithoutPoliciesInput {
  update: PlaceUpdateWithoutPoliciesDataInput
  create: PlaceCreateWithoutPoliciesInput
}

export interface PaypalInformationUpdateWithoutPaymentAccountDataInput {
  email?: String
}

export interface UserUpsertWithoutHostingExperiencesInput {
  update: UserUpdateWithoutHostingExperiencesDataInput
  create: UserCreateWithoutHostingExperiencesInput
}

export interface PaypalInformationUpsertWithoutPaymentAccountInput {
  update: PaypalInformationUpdateWithoutPaymentAccountDataInput
  create: PaypalInformationCreateWithoutPaymentAccountInput
}

export interface ExperienceCreateWithoutReviewsInput {
  title: String
  pricePerPerson: Int
  popularity: Int
  category?: ExperienceCategoryCreateOneWithoutExperienceInput
  host: UserCreateOneWithoutHostingExperiencesInput
  location: LocationCreateOneWithoutExperienceInput
  preview: PictureCreateOneInput
}

export interface CreditCardInformationUpdateOneWithoutPaymentAccountInput {
  create?: CreditCardInformationCreateWithoutPaymentAccountInput
  connect?: CreditCardInformationWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: CreditCardInformationUpdateWithoutPaymentAccountDataInput
  upsert?: CreditCardInformationUpsertWithoutPaymentAccountInput
}

export interface AmenitiesCreateWithoutPlaceInput {
  elevator?: Boolean
  petsAllowed?: Boolean
  internet?: Boolean
  kitchen?: Boolean
  wirelessInternet?: Boolean
  familyKidFriendly?: Boolean
  freeParkingOnPremises?: Boolean
  hotTub?: Boolean
  pool?: Boolean
  smokingAllowed?: Boolean
  wheelchairAccessible?: Boolean
  breakfast?: Boolean
  cableTv?: Boolean
  suitableForEvents?: Boolean
  dryer?: Boolean
  washer?: Boolean
  indoorFireplace?: Boolean
  tv?: Boolean
  heating?: Boolean
  hangers?: Boolean
  iron?: Boolean
  hairDryer?: Boolean
  doorman?: Boolean
  paidParkingOffPremises?: Boolean
  freeParkingOnStreet?: Boolean
  gym?: Boolean
  airConditioning?: Boolean
  shampoo?: Boolean
  essentials?: Boolean
  laptopFriendlyWorkspace?: Boolean
  privateEntrance?: Boolean
  buzzerWirelessIntercom?: Boolean
  babyBath?: Boolean
  babyMonitor?: Boolean
  babysitterRecommendations?: Boolean
  bathtub?: Boolean
  changingTable?: Boolean
  childrensBooksAndToys?: Boolean
  childrensDinnerware?: Boolean
  crib?: Boolean
}

export interface CreditCardInformationUpdateWithoutPaymentAccountDataInput {
  cardNumber?: String
  expiresOnMonth?: Int
  expiresOnYear?: Int
  securityCode?: String
  firstName?: String
  lastName?: String
  postalCode?: String
  country?: String
}

export interface PaymentCreateWithoutPaymentMethodInput {
  serviceFee: Float
  placePrice: Float
  totalPrice: Float
  booking: BookingCreateOneWithoutPaymentInput
}

export interface CreditCardInformationUpsertWithoutPaymentAccountInput {
  update: CreditCardInformationUpdateWithoutPaymentAccountDataInput
  create: CreditCardInformationCreateWithoutPaymentAccountInput
}

export interface RestaurantCreateWithoutLocationInput {
  title: String
  avgPricePerPerson: Int
  isCurated?: Boolean
  slug: String
  popularity: Int
  pictures?: PictureCreateManyInput
}

export interface PaymentAccountUpsertWithoutPaymentsInput {
  update: PaymentAccountUpdateWithoutPaymentsDataInput
  create: PaymentAccountCreateWithoutPaymentsInput
}

export interface ViewsSubscriptionWhereInput {
  AND?: ViewsSubscriptionWhereInput[] | ViewsSubscriptionWhereInput
  OR?: ViewsSubscriptionWhereInput[] | ViewsSubscriptionWhereInput
  NOT?: ViewsSubscriptionWhereInput[] | ViewsSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ViewsWhereInput
}

export interface PaymentUpsertWithoutBookingInput {
  update: PaymentUpdateWithoutBookingDataInput
  create: PaymentCreateWithoutBookingInput
}

export interface ExperienceWhereUniqueInput {
  id?: ID_Input
}

export interface BookingUpsertWithWhereUniqueWithoutPlaceInput {
  where: BookingWhereUniqueInput
  update: BookingUpdateWithoutPlaceDataInput
  create: BookingCreateWithoutPlaceInput
}

export interface PlaceUpdateWithoutAmenitiesDataInput {
  name?: String
  size?: PLACE_SIZES
  shortDescription?: String
  description?: String
  slug?: String
  maxGuests?: Int
  numBedrooms?: Int
  numBeds?: Int
  numBaths?: Int
  popularity?: Int
  reviews?: ReviewUpdateManyWithoutPlaceInput
  host?: UserUpdateOneWithoutOwnedPlacesInput
  pricing?: PricingUpdateOneWithoutPlaceInput
  location?: LocationUpdateOneWithoutPlaceInput
  views?: ViewsUpdateOneWithoutPlaceInput
  guestRequirements?: GuestRequirementsUpdateOneWithoutPlaceInput
  policies?: PoliciesUpdateOneWithoutPlaceInput
  houseRules?: HouseRulesUpdateOneInput
  bookings?: BookingUpdateManyWithoutPlaceInput
  pictures?: PictureUpdateManyInput
}

export interface PlaceUpsertWithoutReviewsInput {
  update: PlaceUpdateWithoutReviewsDataInput
  create: PlaceCreateWithoutReviewsInput
}

export interface PlaceUpsertWithoutPricingInput {
  update: PlaceUpdateWithoutPricingDataInput
  create: PlaceCreateWithoutPricingInput
}

export interface ReviewUpsertWithWhereUniqueWithoutExperienceInput {
  where: ReviewWhereUniqueInput
  update: ReviewUpdateWithoutExperienceDataInput
  create: ReviewCreateWithoutExperienceInput
}

export interface NeighbourhoodCreateWithoutLocationsInput {
  name: String
  slug: String
  featured: Boolean
  popularity: Int
  homePreview?: PictureCreateOneInput
  city: CityCreateOneWithoutNeighbourhoodsInput
}

export interface ExperienceUpsertWithWhereUniqueWithoutHostInput {
  where: ExperienceWhereUniqueInput
  update: ExperienceUpdateWithoutHostDataInput
  create: ExperienceCreateWithoutHostInput
}

export interface UserCreateWithoutReceivedMessagesInput {
  firstName: String
  lastName: String
  email: String
  password: String
  phone: String
  responseRate?: Float
  responseTime?: Int
  isSuperHost?: Boolean
  ownedPlaces?: PlaceCreateManyWithoutHostInput
  location?: LocationCreateOneWithoutUserInput
  bookings?: BookingCreateManyWithoutBookeeInput
  paymentAccount?: PaymentAccountCreateManyWithoutUserInput
  sentMessages?: MessageCreateManyWithoutFromInput
  notifications?: NotificationCreateManyWithoutUserInput
  profilePicture?: PictureCreateOneInput
  hostingExperiences?: ExperienceCreateManyWithoutHostInput
}

export interface UserUpsertWithoutReceivedMessagesInput {
  update: UserUpdateWithoutReceivedMessagesDataInput
  create: UserCreateWithoutReceivedMessagesInput
}

export interface ReviewWhereInput {
  AND?: ReviewWhereInput[] | ReviewWhereInput
  OR?: ReviewWhereInput[] | ReviewWhereInput
  NOT?: ReviewWhereInput[] | ReviewWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  text?: String
  text_not?: String
  text_in?: String[] | String
  text_not_in?: String[] | String
  text_lt?: String
  text_lte?: String
  text_gt?: String
  text_gte?: String
  text_contains?: String
  text_not_contains?: String
  text_starts_with?: String
  text_not_starts_with?: String
  text_ends_with?: String
  text_not_ends_with?: String
  stars?: Int
  stars_not?: Int
  stars_in?: Int[] | Int
  stars_not_in?: Int[] | Int
  stars_lt?: Int
  stars_lte?: Int
  stars_gt?: Int
  stars_gte?: Int
  accuracy?: Int
  accuracy_not?: Int
  accuracy_in?: Int[] | Int
  accuracy_not_in?: Int[] | Int
  accuracy_lt?: Int
  accuracy_lte?: Int
  accuracy_gt?: Int
  accuracy_gte?: Int
  location?: Int
  location_not?: Int
  location_in?: Int[] | Int
  location_not_in?: Int[] | Int
  location_lt?: Int
  location_lte?: Int
  location_gt?: Int
  location_gte?: Int
  checkIn?: Int
  checkIn_not?: Int
  checkIn_in?: Int[] | Int
  checkIn_not_in?: Int[] | Int
  checkIn_lt?: Int
  checkIn_lte?: Int
  checkIn_gt?: Int
  checkIn_gte?: Int
  value?: Int
  value_not?: Int
  value_in?: Int[] | Int
  value_not_in?: Int[] | Int
  value_lt?: Int
  value_lte?: Int
  value_gt?: Int
  value_gte?: Int
  cleanliness?: Int
  cleanliness_not?: Int
  cleanliness_in?: Int[] | Int
  cleanliness_not_in?: Int[] | Int
  cleanliness_lt?: Int
  cleanliness_lte?: Int
  cleanliness_gt?: Int
  cleanliness_gte?: Int
  communication?: Int
  communication_not?: Int
  communication_in?: Int[] | Int
  communication_not_in?: Int[] | Int
  communication_lt?: Int
  communication_lte?: Int
  communication_gt?: Int
  communication_gte?: Int
  place?: PlaceWhereInput
  experience?: ExperienceWhereInput
}

export interface PaymentUpsertWithWhereUniqueWithoutPaymentMethodInput {
  where: PaymentWhereUniqueInput
  update: PaymentUpdateWithoutPaymentMethodDataInput
  create: PaymentCreateWithoutPaymentMethodInput
}

export interface BookingUpsertWithoutPaymentInput {
  update: BookingUpdateWithoutPaymentDataInput
  create: BookingCreateWithoutPaymentInput
}

export interface UserUpsertWithoutBookingsInput {
  update: UserUpdateWithoutBookingsDataInput
  create: UserCreateWithoutBookingsInput
}

export interface MessageUpsertWithWhereUniqueWithoutFromInput {
  where: MessageWhereUniqueInput
  update: MessageUpdateWithoutFromDataInput
  create: MessageCreateWithoutFromInput
}

export interface UserUpdateOneWithoutNotificationsInput {
  create?: UserCreateWithoutNotificationsInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutNotificationsDataInput
  upsert?: UserUpsertWithoutNotificationsInput
}

export interface PaypalInformationSubscriptionWhereInput {
  AND?: PaypalInformationSubscriptionWhereInput[] | PaypalInformationSubscriptionWhereInput
  OR?: PaypalInformationSubscriptionWhereInput[] | PaypalInformationSubscriptionWhereInput
  NOT?: PaypalInformationSubscriptionWhereInput[] | PaypalInformationSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: PaypalInformationWhereInput
}

export interface PricingCreateWithoutPlaceInput {
  monthlyDiscount?: Int
  weeklyDiscount?: Int
  perNight: Int
  smartPricing?: Boolean
  basePrice: Int
  averageWeekly: Int
  averageMonthly: Int
  cleaningFee?: Int
  securityDeposit?: Int
  extraGuests?: Int
  weekendPricing?: Int
  currency?: CURRENCY
}

export interface ExperienceUpdateWithoutLocationDataInput {
  title?: String
  pricePerPerson?: Int
  popularity?: Int
  category?: ExperienceCategoryUpdateOneWithoutExperienceInput
  host?: UserUpdateOneWithoutHostingExperiencesInput
  reviews?: ReviewUpdateManyWithoutExperienceInput
  preview?: PictureUpdateOneInput
}

export interface LocationUpdateManyWithoutNeighbourHoodInput {
  create?: LocationCreateWithoutNeighbourHoodInput[] | LocationCreateWithoutNeighbourHoodInput
  connect?: LocationWhereUniqueInput[] | LocationWhereUniqueInput
  disconnect?: LocationWhereUniqueInput[] | LocationWhereUniqueInput
  delete?: LocationWhereUniqueInput[] | LocationWhereUniqueInput
  update?: LocationUpdateWithWhereUniqueWithoutNeighbourHoodInput[] | LocationUpdateWithWhereUniqueWithoutNeighbourHoodInput
  upsert?: LocationUpsertWithWhereUniqueWithoutNeighbourHoodInput[] | LocationUpsertWithWhereUniqueWithoutNeighbourHoodInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface RestaurantPreviousValues {
  id: ID_Output
  createdAt: DateTime
  title: String
  avgPricePerPerson: Int
  isCurated: Boolean
  slug: String
  popularity: Int
}

export interface BatchPayload {
  count: Long
}

export interface User extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  firstName: String
  lastName: String
  email: String
  password: String
  phone: String
  responseRate?: Float
  responseTime?: Int
  isSuperHost: Boolean
  ownedPlaces?: Place[]
  location?: Location
  bookings?: Booking[]
  paymentAccount?: PaymentAccount[]
  sentMessages?: Message[]
  receivedMessages?: Message[]
  notifications?: Notification[]
  profilePicture?: Picture
  hostingExperiences?: Experience[]
}

export interface RestaurantSubscriptionPayload {
  mutation: MutationType
  node?: Restaurant
  updatedFields?: String[]
  previousValues?: RestaurantPreviousValues
}

export interface MessagePreviousValues {
  id: ID_Output
  createdAt: DateTime
  deliveredAt: DateTime
  readAt: DateTime
}

export interface Place extends Node {
  id: ID_Output
  name?: String
  size?: PLACE_SIZES
  shortDescription: String
  description: String
  slug: String
  maxGuests: Int
  numBedrooms: Int
  numBeds: Int
  numBaths: Int
  reviews?: Review[]
  amenities: Amenities
  host: User
  pricing: Pricing
  location: Location
  views: Views
  guestRequirements?: GuestRequirements
  policies?: Policies
  houseRules?: HouseRules
  bookings?: Booking[]
  pictures?: Picture[]
  popularity: Int
}

/*
 * An edge in a connection.

 */
export interface RestaurantEdge {
  node: Restaurant
  cursor: String
}

export interface AggregateRestaurant {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface NotificationEdge {
  node: Notification
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface RestaurantConnection {
  pageInfo: PageInfo
  edges: RestaurantEdge[]
  aggregate: AggregateRestaurant
}

export interface AggregateMessage {
  count: Int
}

export interface NotificationPreviousValues {
  id: ID_Output
  createdAt: DateTime
  type?: NOTIFICATION_TYPE
  link: String
  readDate: DateTime
}

/*
 * A connection to a list of items.

 */
export interface MessageConnection {
  pageInfo: PageInfo
  edges: MessageEdge[]
  aggregate: AggregateMessage
}

export interface NotificationSubscriptionPayload {
  mutation: MutationType
  node?: Notification
  updatedFields?: String[]
  previousValues?: NotificationPreviousValues
}

/*
 * An edge in a connection.

 */
export interface CreditCardInformationEdge {
  node: CreditCardInformation
  cursor: String
}

export interface Review extends Node {
  id: ID_Output
  createdAt: DateTime
  text: String
  stars: Int
  accuracy: Int
  location: Int
  checkIn: Int
  value: Int
  cleanliness: Int
  communication: Int
  place: Place
  experience?: Experience
}

export interface AggregatePaypalInformation {
  count: Int
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface PaypalInformationConnection {
  pageInfo: PageInfo
  edges: PaypalInformationEdge[]
  aggregate: AggregatePaypalInformation
}

export interface UserPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  firstName: String
  lastName: String
  email: String
  password: String
  phone: String
  responseRate?: Float
  responseTime?: Int
  isSuperHost: Boolean
}

/*
 * An edge in a connection.

 */
export interface PaymentAccountEdge {
  node: PaymentAccount
  cursor: String
}

export interface Notification extends Node {
  id: ID_Output
  createdAt: DateTime
  type?: NOTIFICATION_TYPE
  user: User
  link: String
  readDate: DateTime
}

export interface AggregatePayment {
  count: Int
}

export interface PlaceSubscriptionPayload {
  mutation: MutationType
  node?: Place
  updatedFields?: String[]
  previousValues?: PlacePreviousValues
}

/*
 * A connection to a list of items.

 */
export interface PaymentConnection {
  pageInfo: PageInfo
  edges: PaymentEdge[]
  aggregate: AggregatePayment
}

export interface PlacePreviousValues {
  id: ID_Output
  name?: String
  size?: PLACE_SIZES
  shortDescription: String
  description: String
  slug: String
  maxGuests: Int
  numBedrooms: Int
  numBeds: Int
  numBaths: Int
  popularity: Int
}

/*
 * An edge in a connection.

 */
export interface BookingEdge {
  node: Booking
  cursor: String
}

export interface Message extends Node {
  id: ID_Output
  createdAt: DateTime
  from: User
  to: User
  deliveredAt: DateTime
  readAt: DateTime
}

export interface AggregateReview {
  count: Int
}

export interface PricingSubscriptionPayload {
  mutation: MutationType
  node?: Pricing
  updatedFields?: String[]
  previousValues?: PricingPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface ReviewConnection {
  pageInfo: PageInfo
  edges: ReviewEdge[]
  aggregate: AggregateReview
}

export interface PricingPreviousValues {
  id: ID_Output
  monthlyDiscount?: Int
  weeklyDiscount?: Int
  perNight: Int
  smartPricing: Boolean
  basePrice: Int
  averageWeekly: Int
  averageMonthly: Int
  cleaningFee?: Int
  securityDeposit?: Int
  extraGuests?: Int
  weekendPricing?: Int
  currency?: CURRENCY
}

/*
 * An edge in a connection.

 */
export interface AmenitiesEdge {
  node: Amenities
  cursor: String
}

export interface CreditCardInformation extends Node {
  id: ID_Output
  createdAt: DateTime
  cardNumber: String
  expiresOnMonth: Int
  expiresOnYear: Int
  securityCode: String
  firstName: String
  lastName: String
  postalCode: String
  country: String
  paymentAccount?: PaymentAccount
}

export interface AggregateExperienceCategory {
  count: Int
}

export interface GuestRequirementsSubscriptionPayload {
  mutation: MutationType
  node?: GuestRequirements
  updatedFields?: String[]
  previousValues?: GuestRequirementsPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface ExperienceCategoryConnection {
  pageInfo: PageInfo
  edges: ExperienceCategoryEdge[]
  aggregate: AggregateExperienceCategory
}

export interface GuestRequirementsPreviousValues {
  id: ID_Output
  govIssuedId: Boolean
  recommendationsFromOtherHosts: Boolean
  guestTripInformation: Boolean
}

/*
 * An edge in a connection.

 */
export interface ExperienceEdge {
  node: Experience
  cursor: String
}

export interface PaypalInformation extends Node {
  id: ID_Output
  createdAt: DateTime
  email: String
  paymentAccount: PaymentAccount
}

export interface AggregatePicture {
  count: Int
}

export interface PoliciesSubscriptionPayload {
  mutation: MutationType
  node?: Policies
  updatedFields?: String[]
  previousValues?: PoliciesPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface PictureConnection {
  pageInfo: PageInfo
  edges: PictureEdge[]
  aggregate: AggregatePicture
}

export interface PoliciesPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  checkInStartTime: Float
  checkInEndTime: Float
  checkoutTime: Float
}

/*
 * An edge in a connection.

 */
export interface CityEdge {
  node: City
  cursor: String
}

export interface PaymentAccount extends Node {
  id: ID_Output
  createdAt: DateTime
  type?: PAYMENT_PROVIDER
  user: User
  payments?: Payment[]
  paypal?: PaypalInformation
  creditcard?: CreditCardInformation
}

export interface AggregateNeighbourhood {
  count: Int
}

export interface HouseRulesSubscriptionPayload {
  mutation: MutationType
  node?: HouseRules
  updatedFields?: String[]
  previousValues?: HouseRulesPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface NeighbourhoodConnection {
  pageInfo: PageInfo
  edges: NeighbourhoodEdge[]
  aggregate: AggregateNeighbourhood
}

export interface HouseRulesPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  suitableForChildren?: Boolean
  suitableForInfants?: Boolean
  petsAllowed?: Boolean
  smokingAllowed?: Boolean
  partiesAndEventsAllowed?: Boolean
  additionalRules?: String
}

/*
 * An edge in a connection.

 */
export interface LocationEdge {
  node: Location
  cursor: String
}

export interface Payment extends Node {
  id: ID_Output
  createdAt: DateTime
  serviceFee: Float
  placePrice: Float
  totalPrice: Float
  booking: Booking
  paymentMethod: PaymentAccount
}

export interface AggregateViews {
  count: Int
}

export interface ViewsSubscriptionPayload {
  mutation: MutationType
  node?: Views
  updatedFields?: String[]
  previousValues?: ViewsPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface ViewsConnection {
  pageInfo: PageInfo
  edges: ViewsEdge[]
  aggregate: AggregateViews
}

export interface ViewsPreviousValues {
  id: ID_Output
  lastWeek: Int
}

/*
 * An edge in a connection.

 */
export interface HouseRulesEdge {
  node: HouseRules
  cursor: String
}

export interface Booking extends Node {
  id: ID_Output
  createdAt: DateTime
  bookee: User
  place: Place
  startDate: DateTime
  endDate: DateTime
  payment: Payment
}

export interface AggregatePolicies {
  count: Int
}

export interface LocationSubscriptionPayload {
  mutation: MutationType
  node?: Location
  updatedFields?: String[]
  previousValues?: LocationPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface PoliciesConnection {
  pageInfo: PageInfo
  edges: PoliciesEdge[]
  aggregate: AggregatePolicies
}

export interface LocationPreviousValues {
  id: ID_Output
  lat: Float
  lng: Float
  address?: String
  directions?: String
}

/*
 * An edge in a connection.

 */
export interface GuestRequirementsEdge {
  node: GuestRequirements
  cursor: String
}

export interface HouseRules extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  suitableForChildren?: Boolean
  suitableForInfants?: Boolean
  petsAllowed?: Boolean
  smokingAllowed?: Boolean
  partiesAndEventsAllowed?: Boolean
  additionalRules?: String
}

export interface AggregatePricing {
  count: Int
}

export interface NeighbourhoodSubscriptionPayload {
  mutation: MutationType
  node?: Neighbourhood
  updatedFields?: String[]
  previousValues?: NeighbourhoodPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface PricingConnection {
  pageInfo: PageInfo
  edges: PricingEdge[]
  aggregate: AggregatePricing
}

export interface NeighbourhoodPreviousValues {
  id: ID_Output
  name: String
  slug: String
  featured: Boolean
  popularity: Int
}

/*
 * An edge in a connection.

 */
export interface PlaceEdge {
  node: Place
  cursor: String
}

export interface Policies extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  checkInStartTime: Float
  checkInEndTime: Float
  checkoutTime: Float
  place: Place
}

export interface AggregateUser {
  count: Int
}

export interface CitySubscriptionPayload {
  mutation: MutationType
  node?: City
  updatedFields?: String[]
  previousValues?: CityPreviousValues
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

export interface CityPreviousValues {
  id: ID_Output
  name: String
}

export interface AggregateNotification {
  count: Int
}

export interface GuestRequirements extends Node {
  id: ID_Output
  govIssuedId: Boolean
  recommendationsFromOtherHosts: Boolean
  guestTripInformation: Boolean
  place: Place
}

/*
 * An edge in a connection.

 */
export interface MessageEdge {
  node: Message
  cursor: String
}

export interface PictureSubscriptionPayload {
  mutation: MutationType
  node?: Picture
  updatedFields?: String[]
  previousValues?: PicturePreviousValues
}

/*
 * A connection to a list of items.

 */
export interface CreditCardInformationConnection {
  pageInfo: PageInfo
  edges: CreditCardInformationEdge[]
  aggregate: AggregateCreditCardInformation
}

export interface PicturePreviousValues {
  url: String
}

export interface AggregatePaymentAccount {
  count: Int
}

export interface Views extends Node {
  id: ID_Output
  lastWeek: Int
  place: Place
}

/*
 * An edge in a connection.

 */
export interface PaymentEdge {
  node: Payment
  cursor: String
}

export interface ExperienceSubscriptionPayload {
  mutation: MutationType
  node?: Experience
  updatedFields?: String[]
  previousValues?: ExperiencePreviousValues
}

/*
 * A connection to a list of items.

 */
export interface BookingConnection {
  pageInfo: PageInfo
  edges: BookingEdge[]
  aggregate: AggregateBooking
}

export interface ExperiencePreviousValues {
  id: ID_Output
  title: String
  pricePerPerson: Int
  popularity: Int
}

export interface AggregateAmenities {
  count: Int
}

export interface Pricing extends Node {
  id: ID_Output
  place: Place
  monthlyDiscount?: Int
  weeklyDiscount?: Int
  perNight: Int
  smartPricing: Boolean
  basePrice: Int
  averageWeekly: Int
  averageMonthly: Int
  cleaningFee?: Int
  securityDeposit?: Int
  extraGuests?: Int
  weekendPricing?: Int
  currency?: CURRENCY
}

/*
 * An edge in a connection.

 */
export interface ExperienceCategoryEdge {
  node: ExperienceCategory
  cursor: String
}

export interface ExperienceCategorySubscriptionPayload {
  mutation: MutationType
  node?: ExperienceCategory
  updatedFields?: String[]
  previousValues?: ExperienceCategoryPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface ExperienceConnection {
  pageInfo: PageInfo
  edges: ExperienceEdge[]
  aggregate: AggregateExperience
}

export interface ExperienceCategoryPreviousValues {
  id: ID_Output
  mainColor: String
  name: String
}

export interface AggregateCity {
  count: Int
}

export interface Amenities extends Node {
  id: ID_Output
  place: Place
  elevator: Boolean
  petsAllowed: Boolean
  internet: Boolean
  kitchen: Boolean
  wirelessInternet: Boolean
  familyKidFriendly: Boolean
  freeParkingOnPremises: Boolean
  hotTub: Boolean
  pool: Boolean
  smokingAllowed: Boolean
  wheelchairAccessible: Boolean
  breakfast: Boolean
  cableTv: Boolean
  suitableForEvents: Boolean
  dryer: Boolean
  washer: Boolean
  indoorFireplace: Boolean
  tv: Boolean
  heating: Boolean
  hangers: Boolean
  iron: Boolean
  hairDryer: Boolean
  doorman: Boolean
  paidParkingOffPremises: Boolean
  freeParkingOnStreet: Boolean
  gym: Boolean
  airConditioning: Boolean
  shampoo: Boolean
  essentials: Boolean
  laptopFriendlyWorkspace: Boolean
  privateEntrance: Boolean
  buzzerWirelessIntercom: Boolean
  babyBath: Boolean
  babyMonitor: Boolean
  babysitterRecommendations: Boolean
  bathtub: Boolean
  changingTable: Boolean
  childrensBooksAndToys: Boolean
  childrensDinnerware: Boolean
  crib: Boolean
}

/*
 * An edge in a connection.

 */
export interface NeighbourhoodEdge {
  node: Neighbourhood
  cursor: String
}

export interface AmenitiesSubscriptionPayload {
  mutation: MutationType
  node?: Amenities
  updatedFields?: String[]
  previousValues?: AmenitiesPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface LocationConnection {
  pageInfo: PageInfo
  edges: LocationEdge[]
  aggregate: AggregateLocation
}

export interface AmenitiesPreviousValues {
  id: ID_Output
  elevator: Boolean
  petsAllowed: Boolean
  internet: Boolean
  kitchen: Boolean
  wirelessInternet: Boolean
  familyKidFriendly: Boolean
  freeParkingOnPremises: Boolean
  hotTub: Boolean
  pool: Boolean
  smokingAllowed: Boolean
  wheelchairAccessible: Boolean
  breakfast: Boolean
  cableTv: Boolean
  suitableForEvents: Boolean
  dryer: Boolean
  washer: Boolean
  indoorFireplace: Boolean
  tv: Boolean
  heating: Boolean
  hangers: Boolean
  iron: Boolean
  hairDryer: Boolean
  doorman: Boolean
  paidParkingOffPremises: Boolean
  freeParkingOnStreet: Boolean
  gym: Boolean
  airConditioning: Boolean
  shampoo: Boolean
  essentials: Boolean
  laptopFriendlyWorkspace: Boolean
  privateEntrance: Boolean
  buzzerWirelessIntercom: Boolean
  babyBath: Boolean
  babyMonitor: Boolean
  babysitterRecommendations: Boolean
  bathtub: Boolean
  changingTable: Boolean
  childrensBooksAndToys: Boolean
  childrensDinnerware: Boolean
  crib: Boolean
}

export interface AggregateHouseRules {
  count: Int
}

export interface Restaurant extends Node {
  id: ID_Output
  createdAt: DateTime
  title: String
  avgPricePerPerson: Int
  pictures?: Picture[]
  location: Location
  isCurated: Boolean
  slug: String
  popularity: Int
}

/*
 * An edge in a connection.

 */
export interface PoliciesEdge {
  node: Policies
  cursor: String
}

export interface ReviewSubscriptionPayload {
  mutation: MutationType
  node?: Review
  updatedFields?: String[]
  previousValues?: ReviewPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface GuestRequirementsConnection {
  pageInfo: PageInfo
  edges: GuestRequirementsEdge[]
  aggregate: AggregateGuestRequirements
}

export interface ReviewPreviousValues {
  id: ID_Output
  createdAt: DateTime
  text: String
  stars: Int
  accuracy: Int
  location: Int
  checkIn: Int
  value: Int
  cleanliness: Int
  communication: Int
}

export interface AggregatePlace {
  count: Int
}

export interface City extends Node {
  id: ID_Output
  name: String
  neighbourhoods?: Neighbourhood[]
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface BookingSubscriptionPayload {
  mutation: MutationType
  node?: Booking
  updatedFields?: String[]
  previousValues?: BookingPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface NotificationConnection {
  pageInfo: PageInfo
  edges: NotificationEdge[]
  aggregate: AggregateNotification
}

export interface BookingPreviousValues {
  id: ID_Output
  createdAt: DateTime
  startDate: DateTime
  endDate: DateTime
}

/*
 * An edge in a connection.

 */
export interface PaypalInformationEdge {
  node: PaypalInformation
  cursor: String
}

export interface Picture {
  url: String
}

export interface AggregateBooking {
  count: Int
}

export interface PaymentSubscriptionPayload {
  mutation: MutationType
  node?: Payment
  updatedFields?: String[]
  previousValues?: PaymentPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface AmenitiesConnection {
  pageInfo: PageInfo
  edges: AmenitiesEdge[]
  aggregate: AggregateAmenities
}

export interface PaymentPreviousValues {
  id: ID_Output
  createdAt: DateTime
  serviceFee: Float
  placePrice: Float
  totalPrice: Float
}

/*
 * An edge in a connection.

 */
export interface PictureEdge {
  node: Picture
  cursor: String
}

export interface Neighbourhood extends Node {
  id: ID_Output
  locations?: Location[]
  name: String
  slug: String
  homePreview?: Picture
  city: City
  featured: Boolean
  popularity: Int
}

export interface AggregateLocation {
  count: Int
}

export interface PaymentAccountSubscriptionPayload {
  mutation: MutationType
  node?: PaymentAccount
  updatedFields?: String[]
  previousValues?: PaymentAccountPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface HouseRulesConnection {
  pageInfo: PageInfo
  edges: HouseRulesEdge[]
  aggregate: AggregateHouseRules
}

export interface PaymentAccountPreviousValues {
  id: ID_Output
  createdAt: DateTime
  type?: PAYMENT_PROVIDER
}

/*
 * An edge in a connection.

 */
export interface PricingEdge {
  node: Pricing
  cursor: String
}

export interface Location extends Node {
  id: ID_Output
  lat: Float
  lng: Float
  neighbourHood?: Neighbourhood
  user?: User
  place?: Place
  address?: String
  directions?: String
  experience?: Experience
  restaurant?: Restaurant
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

export interface PaypalInformationSubscriptionPayload {
  mutation: MutationType
  node?: PaypalInformation
  updatedFields?: String[]
  previousValues?: PaypalInformationPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface PaymentAccountConnection {
  pageInfo: PageInfo
  edges: PaymentAccountEdge[]
  aggregate: AggregatePaymentAccount
}

export interface PaypalInformationPreviousValues {
  id: ID_Output
  createdAt: DateTime
  email: String
}

export interface AggregateExperience {
  count: Int
}

export interface ExperienceCategory extends Node {
  id: ID_Output
  mainColor: String
  name: String
  experience?: Experience
}

/*
 * An edge in a connection.

 */
export interface ViewsEdge {
  node: Views
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface PlaceConnection {
  pageInfo: PageInfo
  edges: PlaceEdge[]
  aggregate: AggregatePlace
}

export interface MessageSubscriptionPayload {
  mutation: MutationType
  node?: Message
  updatedFields?: String[]
  previousValues?: MessagePreviousValues
}

export interface Experience extends Node {
  id: ID_Output
  category?: ExperienceCategory
  title: String
  host: User
  location: Location
  pricePerPerson: Int
  reviews?: Review[]
  preview: Picture
  popularity: Int
}

export interface CreditCardInformationPreviousValues {
  id: ID_Output
  createdAt: DateTime
  cardNumber: String
  expiresOnMonth: Int
  expiresOnYear: Int
  securityCode: String
  firstName: String
  lastName: String
  postalCode: String
  country: String
}

export interface CreditCardInformationSubscriptionPayload {
  mutation: MutationType
  node?: CreditCardInformation
  updatedFields?: String[]
  previousValues?: CreditCardInformationPreviousValues
}

export interface AggregateCreditCardInformation {
  count: Int
}

export interface AggregateGuestRequirements {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface CityConnection {
  pageInfo: PageInfo
  edges: CityEdge[]
  aggregate: AggregateCity
}

/*
 * An edge in a connection.

 */
export interface ReviewEdge {
  node: Review
  cursor: String
}

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

export type DateTime = Date | string